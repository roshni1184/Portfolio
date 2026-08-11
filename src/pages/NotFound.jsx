import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h1 className="text-7xl sm:text-9xl font-bold gradient-text mb-4">404</h1>
      <p className="text-muted mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        <FaHome /> Back to Home
      </Link>
    </motion.div>
  );
}
