import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  const QuickLinks = [
    {
      title: 'Course Syllabus',
      link: '/docs/syllabus',
      description: 'Course overview, objectives, and policies',
      icon: '📚'
    },
    {
      title: 'Project Details',
      link: '/docs/project/overview',
      description: 'Group project requirements and milestones',
      icon: '🚀'
    },
    {
      title: 'Case Studies',
      link: '/docs/case-studies/overview',
      description: 'In-depth analysis of LLM applications',
      icon: '🔍'
    },
    {
      title: 'Weekly Classes',
      link: '/docs/classes/week1',
      description: 'Course content and materials by week',
      icon: '📅'
    }
  ];

  return (
    <Layout
      title={siteConfig.title}
      description="Course website for DSBA 6010: Applications of Large Language Models">
      <main>
        {/* Hero section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Applications of Large Language Models
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Welcome to DSBA 6010, a hands-on course exploring the practical applications 
                of Large Language Models (LLMs).
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Through weekly classes, in-depth case studies, and an applied group project, 
                you'll learn how to build, deploy, and evaluate LLM-based applications.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {QuickLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="no-underline">
                <div className="group border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}