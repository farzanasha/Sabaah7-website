import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, width = "100%" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
                duration: 0.8, 
                delay: delay, 
                ease: "easeOut" 
            }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
}