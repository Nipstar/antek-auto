import { Button } from './Button';
import type { CaseStudy } from '../data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { industry, headline, meta, challenge, solution, results, testimonial } = caseStudy;

  // Determine badge styling based on industry
  const getBadgeStyles = () => {
    switch (industry) {
      case 'HOSPITALITY':
        return 'bg-terracotta text-charcoal';
      case 'FINANCE':
        return 'bg-soft-sage text-charcoal';
      case 'OPERATIONS':
        return 'bg-warm-beige text-charcoal';
      default:
        return 'bg-charcoal text-off-white';
    }
  };

  return (
    <div className="bg-off-white border-3 md:border-4 border-charcoal shadow-brutal md:shadow-brutal-lg p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 mb-8 md:mb-12 max-w-7xl mx-auto transition-all duration-300 hover:translate-x-1 hover:shadow-[_-8px_8px_0px_#000000]">
      {/* Industry Badge */}
      <div className={`inline-block ${getBadgeStyles()} font-black text-xs uppercase tracking-widest px-4 md:px-5 py-2 md:py-2.5 mb-4 md:mb-6 border-3 border-charcoal shadow-[4px_4px_0px_#000000]`}>
        {industry}
      </div>

      {/* Headline */}
      <h3 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-tight-xl text-charcoal mb-3 leading-tight">
        {headline}
      </h3>

      {/* Meta */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-charcoal/70 mb-6 md:mb-10">
        {meta}
      </p>

      {/* Challenge Section */}
      <div className="mb-6">
        <h4 className="font-black text-sm uppercase tracking-wide text-charcoal mb-2">
          {challenge.title}
        </h4>
        <p className="text-base md:text-lg text-charcoal leading-relaxed">
          {challenge.description}
        </p>
      </div>

      {/* Solution Section */}
      <div className="mb-8">
        <h4 className="font-black text-sm uppercase tracking-wide text-charcoal mb-2">
          {solution.title}
        </h4>
        <p className="text-base md:text-lg text-charcoal leading-relaxed">
          {solution.description}
        </p>
      </div>

      {/* Results Box - THE CRITICAL VISUAL ELEMENT */}
      <div className="bg-soft-sage border-3 md:border-4 border-charcoal p-5 sm:p-6 md:p-7 lg:p-10 mb-8 md:mb-10 shadow-[6px_6px_0px_#000000] md:shadow-[8px_8px_0px_#000000]">
        <h4 className="font-black text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-wide text-charcoal mb-6 md:mb-8">
          {results.title}
        </h4>

        {/* Metric Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-4 lg:gap-6 xl:gap-8 mb-8 md:mb-10">
          {results.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-off-white border-4 border-charcoal shadow-[4px_4px_0px_rgba(0,0,0,0.1)] p-4 sm:p-5 md:p-5 lg:p-6 xl:p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)]"
            >
              {/* HUGE Number - More conservative scaling for narrow 3-column layouts */}
              <div className="text-5xl sm:text-[3.5rem] md:text-[3rem] lg:text-[3.75rem] xl:text-6xl 2xl:text-7xl font-black text-terracotta leading-none mb-3 md:mb-3 lg:mb-4 tracking-tighter">
                {metric.number}
              </div>

              {/* Label */}
              <div className="font-black text-[0.65rem] sm:text-xs md:text-[0.7rem] lg:text-xs xl:text-sm uppercase tracking-wide text-charcoal mb-2 md:mb-2 lg:mb-3 leading-tight whitespace-pre-line">
                {metric.label}
              </div>

              {/* Detail */}
              <div className="text-[0.7rem] sm:text-xs md:text-[0.7rem] lg:text-xs xl:text-sm text-charcoal/70">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="mt-6 md:mt-8">
          <h5 className="font-black text-xs md:text-sm uppercase tracking-wide text-charcoal mb-4 md:mb-5">
            Additional Benefits:
          </h5>
          <ul className="space-y-2 md:space-y-3">
            {results.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-charcoal pl-7 md:pl-8 relative">
                <span className="absolute left-0 top-0 text-terracotta text-lg md:text-xl font-black">✓</span>
                <span className="leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quote Section */}
      <div className="border-l-4 md:border-l-6 border-terracotta bg-gray-100 p-6 md:p-8 lg:p-10 mb-8 md:mb-10 relative">
        {/* Large Quotation Mark */}
        <div className="hidden md:block absolute top-5 left-5 text-7xl font-black text-terracotta opacity-30 leading-none select-none pointer-events-none">"</div>

        <p className="text-base md:text-lg lg:text-xl text-charcoal italic leading-relaxed mb-3 md:mb-4 relative z-10">
          "{testimonial.quote}"
        </p>
        <p className="font-black text-xs md:text-sm lg:text-base text-charcoal relative z-10">
          — {testimonial.author}, {testimonial.business}
        </p>
      </div>

      {/* CTA Button */}
      <Button
        variant="primary"
        onClick={() => window.navigate('/contact')}
        className="w-full md:w-auto text-sm md:text-base font-bold uppercase tracking-wide"
      >
        READ FULL CASE STUDY →
      </Button>
    </div>
  );
}
