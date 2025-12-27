import { useLocation } from "react-router-dom";
import CountUp from "react-countup";
import PageWrapper from "../components/PageWrapper";

const Result = () => {
  const { state } = useLocation();

  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#0B0E1A] flex items-center justify-center">
        <div className="bg-[#12182A] p-10 rounded-xl text-center w-full max-w-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Analysis Result
          </h2>

          <p className="text-gray-300 mb-6">
            AI confidence score:
          </p>

          <div className="text-6xl font-bold text-indigo-500">
            <CountUp end={state?.type === "image" ? 95 : 90} duration={2} />%
          </div>

          <button
            onClick={() => window.location.href = "/upload"}
            className="mt-6 bg-indigo-600 px-6 py-3 rounded-lg"
          >
            Analyze Another
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Result;
