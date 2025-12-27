import PageWrapper from "../components/PageWrapper";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LetterGlitch from "../components/LetterGlitch";
import { motion } from "framer-motion";

const Processing = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/result", { state });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper>

      <div className="fixed inset-0 w-screen h-screen overflow-hidden">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          className="w-full h-full"
        />
      </div>

      
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-6" />

          {/* Text */}
          <p className="text-lg tracking-wide font-medium">
            Analyzing media...
          </p>

          <p className="text-sm text-gray-400 mt-1">
            Detecting authenticity patterns
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Processing;
