export interface ImpactReport {
  id: number;
  recommendation: {
    text: string;
    category: string;
  };
  awsComponent: string;
  accountName: string;
  region: string;
  severityLevel: 'High' | 'Medium' | 'Low';
  impactScore: number;
  impactExplanation: string;
}

export interface Prompt {
  id: number;
  text: string;
}

const awsComponents = [
  'EC2 Instance', 'S3 Bucket', 'RDS Database', 'Lambda Function', 
  'ECS Cluster', 'DynamoDB Table', 'API Gateway', 'CloudFront Distribution',
  'EKS Cluster', 'SNS Topic', 'SQS Queue', 'ElastiCache Cluster'
];

const regions = [
  'us-west-1', 'us-west-2', 'us-east-1', 'us-east-2', 
  'eu-west-1', 'eu-central-1', 'ap-southeast-1', 'ap-northeast-1',
  'sa-east-1', 'ca-central-1', 'ap-south-1', 'ap-southeast-2'
];

const accountNames = [
  'MyCompany-Prod', 'MyCompany-Dev', 'MyCompany-Staging', 
  'ClientA-Prod', 'ClientB-Prod', 'InternalTools',
  'DataAnalytics', 'WebServices', 'MobileBackend', 'AIResearch'
];

export const prompts: Prompt[] = [
  {
    id: 1,
    text: "Make sure that every POD has CPU and memory requests and limits to have control over the PODS"
  },
  {
    id: 2,
    text: "Implement automated scaling policies for EC2 instances based on CPU utilization"
  },
  {
    id: 3,
    text: "Set up multi-region data replication for critical S3 buckets to improve disaster recovery"
  }
];

export const impactReports: ImpactReport[] = [
  {
    id: 1,
    recommendation: {
      text: "Based on the current impact, we recommend increasing resource allocation by 15% to key areas.",
      category: "Resource Management"
    },
    awsComponent: "EC2 Instance",
    accountName: "MyCompany-Prod",
    region: "us-west-2",
    severityLevel: "High",
    impactScore: 4,
    impactExplanation: "The impact score of 4 indicates a significant effect on system performance and cost efficiency. Immediate action is recommended to optimize resource allocation."
  },
  {
    id: 2,
    recommendation: {
      text: "The impact suggests a need for process optimization. Consider implementing lean methodologies to streamline workflows.",
      category: "Process Improvement"
    },
    awsComponent: "S3 Bucket",
    accountName: "MyCompany-Dev",
    region: "us-east-1",
    severityLevel: "Medium",
    impactScore: 3,
    impactExplanation: "An impact score of 3 suggests moderate inefficiencies in current processes. Implementing the recommended optimizations could lead to noticeable improvements in operational efficiency."
  },
  {
    id: 3,
    recommendation: {
      text: "Given the positive impact, maintain current strategies and implement continuous monitoring for sustained success.",
      category: "Strategy"
    },
    awsComponent: "RDS Database",
    accountName: "ClientA-Prod",
    region: "eu-west-1",
    severityLevel: "Low",
    impactScore: 2,
    impactExplanation: "The impact score of 2 indicates that current strategies are effective but there's room for improvement. Continuous monitoring will help maintain and potentially enhance performance."
  },
  {
    id: 4,
    recommendation: {
      text: "The impact indicates potential areas for improvement. Focus on comprehensive employee training and development programs.",
      category: "Human Resources"
    },
    awsComponent: "Lambda Function",
    accountName: "InternalTools",
    region: "ap-southeast-1",
    severityLevel: "Medium",
    impactScore: 3,
    impactExplanation: "With an impact score of 3, there's a clear opportunity to enhance operational efficiency through improved employee skills and knowledge. Investing in training could yield significant benefits."
  },
  {
    id: 5,
    recommendation: {
      text: "Consider diversifying your approach to mitigate risks. Explore new markets or product lines to enhance overall impact.",
      category: "Risk Management"
    },
    awsComponent: "ECS Cluster",
    accountName: "MyCompany-Staging",
    region: "us-east-2",
    severityLevel: "High",
    impactScore: 5,
    impactExplanation: "The maximum impact score of 5 highlights critical vulnerabilities in the current approach. Urgent action is needed to diversify and mitigate risks to ensure business continuity and growth."
  },
  {
    id: 6,
    recommendation: {
      text: "The data suggests an opportunity to improve customer engagement. Implement targeted outreach programs and personalized marketing.",
      category: "Customer Relations"
    },
    awsComponent: "DynamoDB Table",
    accountName: "WebServices",
    region: "eu-central-1",
    severityLevel: "Medium",
    impactScore: 3,
    impactExplanation: "An impact score of 3 indicates a moderate need for improvement in customer engagement. Implementing the suggested strategies could significantly enhance customer satisfaction and loyalty."
  },
  {
    id: 7,
    recommendation: {
      text: "Based on the impact analysis, invest in emerging technologies to boost operational efficiency and stay competitive.",
      category: "Technology"
    },
    awsComponent: "API Gateway",
    accountName: "MobileBackend",
    region: "ap-northeast-1",
    severityLevel: "High",
    impactScore: 4,
    impactExplanation: "The impact score of 4 suggests that current technology limitations are significantly affecting operational efficiency. Investing in emerging technologies is crucial to maintain competitiveness."
  },
  {
    id: 8,
    recommendation: {
      text: "The current impact level indicates a need for better market positioning. Develop a revised marketing strategy focusing on unique value propositions.",
      category: "Marketing"
    },
    awsComponent: "CloudFront Distribution",
    accountName: "ClientB-Prod",
    region: "sa-east-1",
    severityLevel: "Medium",
    impactScore: 3,
    impactExplanation: "With an impact score of 3, there's a clear opportunity to improve market positioning. A revised marketing strategy could significantly enhance brand visibility and customer acquisition."
  },
  {
    id: 9,
    recommendation: {
      text: "To enhance impact, focus on building stronger partnerships within your industry ecosystem. Explore collaborative opportunities.",
      category: "Partnerships"
    },
    awsComponent: "EKS Cluster",
    accountName: "AIResearch",
    region: "ca-central-1",
    severityLevel: "Low",
    impactScore: 2,
    impactExplanation: "The impact score of 2 suggests that while current partnerships are functional, there's potential for growth. Strengthening industry relationships could open new avenues for innovation and expansion."
  },
  {
    id: 10,
    recommendation: {
      text: "The impact metrics suggest room for improvement in product quality. Implement more rigorous quality control measures and gather customer feedback.",
      category: "Quality Assurance"
    },
    awsComponent: "SNS Topic",
    accountName: "MyCompany-Prod",
    region: "ap-south-1",
    severityLevel: "High",
    impactScore: 4,
    impactExplanation: "An impact score of 4 indicates significant quality issues that are affecting customer satisfaction and potentially damaging brand reputation. Immediate implementation of stricter quality control is crucial."
  },
  {
    id: 11,
    recommendation: {
      text: "Consider implementing a robust data analytics program to gain deeper insights and drive data-informed decision making.",
      category: "Data Analytics"
    },
    awsComponent: "SQS Queue",
    accountName: "DataAnalytics",
    region: "ap-southeast-2",
    severityLevel: "Medium",
    impactScore: 3,
    impactExplanation: "The impact score of 3 suggests that while some data-driven decisions are being made, there's significant room for improvement. A more robust analytics program could provide valuable insights and drive better business outcomes."
  },
  {
    id: 12,
    recommendation: {
      text: "The current impact suggests a need for improved supply chain resilience. Diversify suppliers and optimize inventory management.",
      category: "Supply Chain"
    },
    awsComponent: "ElastiCache Cluster",
    accountName: "MyCompany-Dev",
    region: "us-west-1",
    severityLevel: "High",
    impactScore: 5,
    impactExplanation: "The maximum impact score of 5 indicates critical vulnerabilities in the current supply chain. Urgent action is needed to diversify suppliers and optimize inventory to ensure business continuity and resilience."
  },
  {
    id: 13,
    recommendation: {
      text: "Focus on enhancing your digital presence to improve impact. Invest in user experience improvements and digital marketing strategies.",
      category: "Digital Transformation"
    },
    awsComponent: "EC2 Instance",
    accountName: "WebServices",
    region: "eu-west-1",
    severityLevel: "Medium",
    impactScore: 3,
    impactExplanation: "An impact score of 3 suggests that while there is a digital presence, there's significant room for improvement. Enhancing user experience and digital marketing efforts could lead to increased engagement and conversions."
  },
  {
    id: 14,
    recommendation: {
      text: "The impact analysis indicates potential for improved financial performance. Review cost structures and explore new revenue streams.",
      category: "Financial Strategy"
    },
    awsComponent: "RDS Database",
    accountName: "ClientA-Prod",
    region: "us-east-1",
    severityLevel: "High",
    impactScore: 4,
    impactExplanation: "The impact score of 4 highlights significant opportunities for financial optimization. Reviewing cost structures and exploring new revenue streams could substantially improve overall financial performance."
  },
  {
    id: 15,
    recommendation: {
      text: "Consider implementing or expanding sustainability initiatives to improve long-term impact and meet growing environmental concerns.",
      category: "Sustainability"
    },
    awsComponent: "Lambda Function",
    accountName: "MyCompany-Staging",
    region: "ap-northeast-1",
    severityLevel: "Low",
    impactScore: 2,
    impactExplanation: "With an impact score of 2, current sustainability efforts are present but limited. Expanding these initiatives could improve long-term impact, meet growing environmental concerns, and potentially provide a competitive advantage."
  }
];

export function getRandomImpactReport(): ImpactReport {
  return impactReports[Math.floor(Math.random() * impactReports.length)];
}

export function getPrompt(index: number): Prompt {
  return prompts[index % prompts.length];
}