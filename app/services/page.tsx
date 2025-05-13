import { MotionAccordion } from '@/components/ui/motion-accordion';
import { services } from '@/lib/constants';

export default function Services() {
  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
          Our Services
        </h2>
        
        <div className="space-y-4">
          {services.map((service, index) => (
            <MotionAccordion
              key={service.id}
              index={index}
              title={service.title}
              content={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}