import Link from "next/link";
import RecommendationCardComponent from "../recommendations/card";
import TitleComponent from "./title";
import { recommendations } from "../recommendations/data";

const RecommendsComponent = () => {
  const recommends = recommendations.slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-[100px] bg-gradient-to-b from-gray-900 to-black">
      <TitleComponent
        eyebrow="Testimonials"
        title="What People Say"
        description="Hear from the managers, product leads, and engineers I've worked with."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {recommends.map((recommend) => (
          <div key={recommend.id}>
            <RecommendationCardComponent
              name={recommend.name}
              role={recommend.role}
              quote={recommend.quote}
              linkedinUrl={recommend.linkedinUrl}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/recommendations"
          className="text-sky-400 hover:text-sky-200 transition text-lg font-medium"
        >
          View all recommendations →
        </Link>
      </div>
    </section>
  );
};

export default RecommendsComponent;
