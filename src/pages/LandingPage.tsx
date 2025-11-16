import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingPageProps {
  onEnter: () => void;
}

export function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="h-screen w-full overflow-hidden relative bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Vibrant Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Orange Gradient Blob */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#FF8A00] to-[#FFB84D] rounded-full blur-3xl opacity-40"
        />
        
        {/* Large Green Gradient Blob */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 40, 0],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#32C96E] to-[#5FD68A] rounded-full blur-3xl opacity-40"
        />
        
        {/* Medium Orange-Green Mix */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#FF8A00] via-[#FFD700] to-[#32C96E] rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Floating Food Images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pizza - Top Left */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-16 left-8 w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-2xl opacity-80"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1544982503-9f984c14501a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc2MzE4NjQzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Pizza"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Burger - Top Right */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-12 w-28 h-28 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl opacity-80"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1651843465180-5965076f7368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmcmllcyUyMG1lYWx8ZW58MXx8fHwxNzYzMTg2Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Burger"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Sushi - Bottom Left */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-16 w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-2xl opacity-80"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYzMTI0NzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sushi"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Vegetables - Bottom Right */}
        <motion.div
          animate={{
            y: [0, 18, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-24 right-20 w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-2xl opacity-80"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1714224247661-ee250f55a842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBncm9jZXJpZXN8ZW58MXx8fHwxNzYzMTMwODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fresh Vegetables"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Delivery Person - Middle Right (smaller) */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-8 -translate-y-1/2 w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-2xl opacity-70"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1601693879203-e26c56cd624d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBwZXJzb258ZW58MXx8fHwxNzYzMTAyOTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Delivery"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Main Content - Centered and Compact */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          {/* Logo/Brand - Smaller */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#FF8A00] to-[#32C96E] rounded-3xl shadow-2xl">
              <h1 className="text-white text-4xl lg:text-5xl tracking-tight">
                QuickBite
              </h1>
            </div>
          </motion.div>

          {/* Tagline with animated gradient text - Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-2"
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900">
              Food & Groceries
              <br />
              <span className="bg-gradient-to-r from-[#FF8A00] via-[#FFB84D] to-[#32C96E] bg-clip-text text-transparent">
                Delivered Fast
              </span>
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Order from your favorite restaurants and stores. Get it delivered in 30 minutes.
            </p>
          </motion.div>

          {/* Features Grid - More Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-2"
          >
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#FF8A00] to-[#FFB84D] flex items-center justify-center"
              >
                <MapPin className="w-5 h-5 text-white" />
              </motion.div>
              <div className="text-xl text-gray-900 mb-1">500+</div>
              <div className="text-xs text-gray-600">Restaurants</div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#32C96E] to-[#5FD68A] flex items-center justify-center text-white"
              >
                30
              </motion.div>
              <div className="text-xl text-gray-900 mb-1">Minutes</div>
              <div className="text-xs text-gray-600">Avg Delivery</div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FF8A00] flex items-center justify-center"
              >
                <Star className="w-5 h-5 text-white fill-white" />
              </motion.div>
              <div className="text-xl text-gray-900 mb-1">4.8★</div>
              <div className="text-xs text-gray-600">User Rating</div>
            </motion.div>
          </motion.div>

          {/* CTA Button - Smaller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="pt-3"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onEnter}
                className="bg-gradient-to-r from-[#FF8A00] to-[#32C96E] hover:from-[#FF7A00] hover:to-[#2AB85E] text-white rounded-full h-12 px-10 text-lg shadow-2xl"
              >
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Bottom badge - Smaller */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xs text-gray-500 pt-1"
          >
            Available in 50+ cities across India
          </motion.div>
        </div>
      </div>

      {/* Decorative Dots Pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
}
