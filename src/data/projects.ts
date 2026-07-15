import ImgDataAnalyticsUSA2022 from '../assets/projects/data-analytics-usa-2022.png'
import ImgHadoopv3 from '../assets/projects/hadoop-v3.png'
import ImgMapreduce from '../assets/projects/mapreduce.png'
import ImgTrataPersonas from '../assets/projects/trata-personas-peru-2017-2025.png'

import DocHadoop from '../assets/documents/DOC - HADOOP.pdf'
import DocMapreduce from '../assets/documents/DOC - MAPREDUCE.pdf'
import DocTrataPersonas from '../assets/documents/TRATA-PERSONAS-PERU-2017-2025.pdf'

import FileTrataPersonasPbix from '../assets/files/trata-personas-peru-2017-2025.pbix'
import FileDataAnalyticsUSAPbix from '../assets/files/data-analytics-usa-2022.pbix'

export interface ProjectAsset {
  label: string
  src: string
}

export interface Project {
  image: string | null
  tags: string[]
  documents: ProjectAsset[]
  files: ProjectAsset[]
  images: string[]
}

export const projects: Project[] = [
  {
    image: ImgDataAnalyticsUSA2022,
    tags: ['PowerBI', 'Power Query', 'Data Transformation'],
    documents: [],
    files: [
      {
        label: 'data-analytics-usa-2022.pbix',
        src: FileDataAnalyticsUSAPbix,
      },
    ],
    images: [],
  },
  {
    image: ImgHadoopv3,
    tags: ['Hadoop', 'Linux', 'Debian', 'Virtual Machine'],
    documents: [{ label: 'DOC - HADOOP.pdf', src: DocHadoop }],
    files: [],
    images: [],
  },
  {
    image: ImgMapreduce,
    tags: ['Hadoop', 'Mapreduce', 'Linux'],
    documents: [{ label: 'DOC - MAPREDUCE.pdf', src: DocMapreduce }],
    files: [],
    images: [],
  },
  {
    image: ImgTrataPersonas,
    tags: ['PowerBI', 'Data Visualization', 'Human Trafficking'],
    documents: [
      { label: 'TRATA-PERSONAS-PERU-2017-2025.pdf', src: DocTrataPersonas },
    ],
    files: [
      {
        label: 'trata-personas-peru-2017-2025.pbix',
        src: FileTrataPersonasPbix,
      },
    ],
    images: [],
  },
]
