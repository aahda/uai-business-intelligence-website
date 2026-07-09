import ImgDataAnalyticsUSA2022 from '../assets/projects/data-analytics-usa-2022.png'
import ImgHadoopv3 from '../assets/projects/hadoop-v3.png'
import ImgMapreduce from '../assets/projects/mapreduce.png'

import DocHadoop from '../assets/documents/DOC - HADOOP.pdf'
import DocMapreduce from '../assets/documents/DOC - MAPREDUCE.pdf'

export interface ProjectAsset {
  label: string
  src: string
}

export interface Project {
  image: string | null
  tags: string[]
  documents: ProjectAsset[]
  images: string[]
}

export const projects: Project[] = [
  {
    image: ImgDataAnalyticsUSA2022,
    tags: ['PowerBI', 'Power Query', 'Data Transformation'],
    documents: [],
    images: [],
  },
  {
    image: ImgHadoopv3,
    tags: ['Hadoop', 'Linux', 'Debian', 'Virtual Machine'],
    documents: [
      { label: 'DOC - HADOOP.pdf', src: DocHadoop },
    ],
    images: [],
  },
  {
    image: ImgMapreduce,
    tags: ['Hadoop', 'Mapreduce', 'Linux'],
    documents: [
      { label: 'DOC - MAPREDUCE.pdf', src: DocMapreduce },
    ],
    images: [],
  },
]
