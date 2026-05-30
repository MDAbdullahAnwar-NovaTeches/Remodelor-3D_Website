import { useEffect, useMemo, useRef, useState } from 'react'
import {
  LinearFilter,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  SRGBColorSpace,
  Texture,
  WebGLRenderer,
} from 'three'
import { bathroomScene } from './Bathroom.js'
import { homeScene, type RemodelScene } from './Home.js'
import { kitchenScene } from './Kitchen.js'
// import Testimonials from './Testimonials.js'

const FRAMES_PER_FOLDER = 240
const SCROLL_DEPTH = 2.35
const FRAME_WIDTH = 3.2
const FRAME_HEIGHT = 1.8
const FRAME_OVERSCAN = 1.06

type ScrollFrame = {
  sceneIndex: number
  frameIndex: number
  sectionProgress: number
  totalProgress: number
}

type StageCard = {
  label: string
  title: string
  copy: string
}

const frameSrc = (folder: string, frameIndex: number) => {
  const frameNumber = String(frameIndex + 1).padStart(3, '0')
  return `/${folder}/ezgif-frame-${frameNumber}.jpg`
}

const frameSrcWithCopySuffix = (
  folder: string,
  frameIndex: number,
  frameCount: number,
) => {
  if (frameCount <= FRAMES_PER_FOLDER || frameIndex < FRAMES_PER_FOLDER) {
    return frameSrc(folder, frameIndex)
  }

  const copyIndex = frameIndex - FRAMES_PER_FOLDER + 1
  const suffix = copyIndex === 1 ? ' (Copy)' : ` (Copy ${copyIndex})`
  return `/${folder}/ezgif-frame-240${suffix}.jpg`
}

const getSceneFrameCount = (scene: RemodelScene) =>
  scene.folderFrameCounts?.reduce((sum, count) => sum + count, 0) ??
  scene.folders.length * FRAMES_PER_FOLDER

const getSceneFrameSrc = (scene: RemodelScene, frameIndex: number) => {
  const folderFrameCounts =
    scene.folderFrameCounts ??
    scene.folders.map(() => FRAMES_PER_FOLDER)

  let offset = frameIndex

  for (let index = 0; index < scene.folders.length; index += 1) {
    const frameCount = folderFrameCounts[index] ?? FRAMES_PER_FOLDER
    if (offset < frameCount) {
      return frameSrcWithCopySuffix(scene.folders[index], offset, frameCount)
    }
    offset -= frameCount
  }

  const lastFolderIndex = scene.folders.length - 1
  const lastFrameCount = folderFrameCounts[lastFolderIndex] ?? FRAMES_PER_FOLDER
  const clampedFrameIndex = Math.max(0, lastFrameCount - 1)
  return frameSrcWithCopySuffix(
    scene.folders[lastFolderIndex],
    clampedFrameIndex,
    lastFrameCount,
  )
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getScrollFrame(scenes: RemodelScene[]): ScrollFrame {
  const maxScroll = Math.max(
    document.documentElement.scrollHeight - window.innerHeight,
    1,
  )
  const totalProgress = clamp(window.scrollY / maxScroll, 0, 0.9999)
  const scenePosition = totalProgress * scenes.length
  const sceneIndex = clamp(Math.floor(scenePosition), 0, scenes.length - 1)
  const sectionProgress = scenePosition - sceneIndex
  const frameIndex = clamp(
    Math.floor(sectionProgress * getSceneFrameCount(scenes[sceneIndex])),
    0,
    getSceneFrameCount(scenes[sceneIndex]) - 1,
  )

  return { sceneIndex, frameIndex, sectionProgress, totalProgress }
}

function getStageCard(scene: RemodelScene, frameIndex: number): StageCard | null {
  if (scene.id === 'home') {
    return null
  }

  const frameNumber = frameIndex + 1

  if (frameNumber >= 1 && frameNumber <= 50) {
    return {
      label: 'Before',
      title: 'Existing space',
      copy: 'Original layout, finishes, and daily flow captured before the remodel begins.',
    }
  }

  if (frameNumber >= 120 && frameNumber <= 170) {
    return {
      label: 'After',
      title: 'Finished reveal',
      copy: 'A polished client-ready preview with materials, lighting, and movement brought together.',
    }
  }

  return null
}

function useImageCache(scenes: RemodelScene[]) {
  const imageCache = useRef(new Map<string, HTMLImageElement>())

  useEffect(() => {
    let cancelled = false
    const cache = imageCache.current

    scenes.forEach((scene) => {
      const folderFrameCounts =
        scene.folderFrameCounts ??
        scene.folders.map(() => FRAMES_PER_FOLDER)

      scene.folders.forEach((folder, folderIndex) => {
        const frameCount = folderFrameCounts[folderIndex] ?? FRAMES_PER_FOLDER

        for (let frameIndex = 0; frameIndex < frameCount; frameIndex += 1) {
          const src = frameSrcWithCopySuffix(folder, frameIndex, frameCount)
          const image = new Image()
          image.decoding = 'async'
          image.src = src
          image.onload = () => {
            if (!cancelled) {
              cache.set(src, image)
            }
          }
        }
      })
    })

    return () => {
      cancelled = true
      cache.clear()
    }
  }, [scenes])

  return imageCache
}

function ImmersiveCanvas({
  scenes,
  activeFrame,
}: {
  scenes: RemodelScene[]
  activeFrame: ScrollFrame
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rendererRef = useRef<WebGLRenderer | null>(null)
  const sceneRef = useRef<Scene | null>(null)
  const materialRef = useRef<MeshBasicMaterial | null>(null)
  const cameraRef = useRef<PerspectiveCamera | null>(null)
  const textureRef = useRef<Texture | null>(null)
  const images = useImageCache(scenes)

  useEffect(() => {
    if (!canvasRef.current) {
      return undefined
    }

    const canvas = canvasRef.current
    const renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    })
    const scene = new Scene()
    const camera = new PerspectiveCamera(45, 1, 0.1, 20)
    const geometry = new PlaneGeometry(FRAME_WIDTH, FRAME_HEIGHT, 28, 16)
    const material = new MeshBasicMaterial({ color: 0xffffff })
    const plane = new Mesh(geometry, material)

    camera.position.z = 1.85
    plane.position.z = -0.2
    scene.add(plane)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x070707, 1)

    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)

      const distance = camera.position.z - plane.position.z
      const viewportHeight =
        2 * Math.tan((camera.fov * Math.PI) / 360) * distance
      const viewportWidth = viewportHeight * camera.aspect
      const coverScale =
        Math.max(viewportWidth / FRAME_WIDTH, viewportHeight / FRAME_HEIGHT) *
        FRAME_OVERSCAN

      plane.scale.set(coverScale, coverScale, 1)
      renderer.render(scene, camera)
    }

    const animate = () => {
      renderer.render(scene, camera)
    }

    rendererRef.current = renderer
    sceneRef.current = scene
    materialRef.current = material
    cameraRef.current = camera
    resize()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      textureRef.current?.dispose()
      renderer.dispose()
      rendererRef.current = null
      sceneRef.current = null
      materialRef.current = null
      cameraRef.current = null
      textureRef.current = null
    }
  }, [])

  useEffect(() => {
    const scene = scenes[activeFrame.sceneIndex]
    const material = materialRef.current
    const renderer = rendererRef.current
    const camera = cameraRef.current
    const threeScene = sceneRef.current

    if (!scene || !material || !renderer || !camera || !threeScene) {
      return
    }

    const src = getSceneFrameSrc(scene, activeFrame.frameIndex)
    const cachedImage = images.current.get(src)
    const image = cachedImage ?? new Image()

    if (!cachedImage) {
      image.src = src
    }

    const applyImage = () => {
      textureRef.current?.dispose()
      const texture = new Texture(image)
      texture.colorSpace = SRGBColorSpace
      texture.minFilter = LinearFilter
      texture.magFilter = LinearFilter
      texture.needsUpdate = true
      material.map = texture
      material.needsUpdate = true
      textureRef.current = texture
      renderer.render(threeScene, camera)
    }

    const { sectionProgress, totalProgress } = activeFrame
    const sway = Math.sin(sectionProgress * Math.PI * 2) * 0.012
    const push = sectionProgress * 0.06

    camera.position.x = (sectionProgress - 0.5) * 0.055
    camera.position.y = Math.sin(totalProgress * Math.PI * 3) * 0.014
    camera.position.z = 1.85 - push
    camera.rotation.y = sway
    camera.rotation.x = Math.cos(sectionProgress * Math.PI) * 0.006

    if (image.complete) {
      applyImage()
    } else {
      image.onload = applyImage
      renderer.render(threeScene, camera)
    }
  }, [activeFrame, images, scenes])

  return <canvas ref={canvasRef} className="immersive-canvas" />
}

function LandingPage() {
  const scenes = useMemo(
    () => [homeScene, kitchenScene, bathroomScene],
    [],
  )
  const [activeFrame, setActiveFrame] = useState<ScrollFrame>(() => ({
    sceneIndex: 0,
    frameIndex: 0,
    sectionProgress: 0,
    totalProgress: 0,
  }))
  const activeStageCard = getStageCard(scenes[activeFrame.sceneIndex], activeFrame.frameIndex)

  useEffect(() => {
    let animationFrame = 0

    const update = () => {
      setActiveFrame(getScrollFrame(scenes))
      animationFrame = 0
    }

    const requestUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [scenes.length])

  return (
    <main className="landing">
      <ImmersiveCanvas scenes={scenes} activeFrame={activeFrame} />
      <div className="progress-rail" aria-hidden="true">
        <span
          style={{
            transform: `scaleY(${clamp(activeFrame.totalProgress, 0.02, 1)})`,
          }}
        />
      </div>

      {activeStageCard ? (
        <aside
          className={`stage-card stage-card-${activeStageCard.label.toLowerCase()}`}
          aria-label={activeStageCard.label}
        >
          <p>{activeStageCard.label}</p>
          <h2>{activeStageCard.title}</h2>
          <span>{activeStageCard.copy}</span>
        </aside>
      ) : null}

      {scenes.map((scene, index) => (
          <section
            className="scroll-scene"
            id={scene.id}
            key={scene.id}
            style={{ minHeight: `${SCROLL_DEPTH * 100}svh` }}
          >
            <div className="scene-copy">
              <p>{scene.eyebrow}</p>
              <h1>
                {index === 0 ? 'Kitchen and Bathroom Remodelors' : scene.title}
              </h1>
              <span>{index === 0 ? scene.title : scene.copy}</span>
            </div>
          </section>
        ))}

      {/* <Testimonials /> */}
    </main>
  )
}

export default LandingPage
