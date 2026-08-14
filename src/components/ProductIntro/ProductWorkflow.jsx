import React from 'react';

/**
 * ProductWorkflow Component
 * Horizontal brutalist workflow strip explaining the product lifecycle in 4 steps.
 */
export default function ProductWorkflow() {
  const steps = [
    {
      num: '01',
      title: 'FIND',
      desc: 'Discover teammates who complement your skills.'
    },
    {
      num: '02',
      title: 'CONNECT',
      desc: 'Build your team around an idea.'
    },
    {
      num: '03',
      title: 'BUILD',
      desc: 'Collaborate and create together.'
    },
    {
      num: '04',
      title: 'COMPETE',
      desc: 'Take your project to a hackathon.'
    }
  ];

  return (
    <div className="product-workflow-panel">
      {steps.map((step) => (
        <div key={step.num} className="workflow-item">
          <span className="workflow-num">{step.num}</span>
          <span className="workflow-title">{step.title}</span>
          <p className="workflow-desc">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
