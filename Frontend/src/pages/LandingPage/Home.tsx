export type RemodelScene = {
  id: string
  eyebrow: string
  title: string
  copy: string
  folders: string[]
  folderFrameCounts?: number[]
}

export const homeScene: RemodelScene = {
  id: 'home',
  eyebrow: 'Arrival',
  title: 'Walk into the remodel before it exists.',
  copy: 'Start at the house and scroll forward as the camera glides through the first moments of a transformed home.',
  // 120-frame version: folder: 'House.jpg',
  folders: ['Remodelor1', 'Remodelor2'],
}
