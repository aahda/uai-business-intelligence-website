import ImgDataAnalyticsUSA2022 from '../assets/projects/data-analytics-usa-2022.png'

export interface Project {
  image: string | null
  tags: string[]
}

export const projects: Project[] = [
  {
    image: ImgDataAnalyticsUSA2022,
    tags: ['PowerBI', 'Power Query', 'Data Transformation'],
  },
  // {
  //   image: null,
  //   tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
  // },
  // {
  //   image: null,
  //   tags: ['PyTorch', 'Transformers', 'FastAPI', 'PostgreSQL'],
  // },
  // {
  //   image: null,
  //   tags: ['Python', 'RLlib', 'AWS', 'Airflow'],
  // },
  // {
  //   image: null,
  //   tags: ['Go', 'Apache Kafka', 'Docker', 'Kubernetes'],
  // },
  // {
  //   image: null,
  //   tags: ['XGBoost', 'Scikit-learn', 'Flask', 'MongoDB'],
  // },
  // {
  //   image: null,
  //   tags: ['LLM', 'LangChain', 'SQL', 'Next.js'],
  // },
]
