import { motion } from 'framer-motion'
import styles from '../styles/demo.module.css'

const container = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 1
    }
  }
}
const child = {
  offscreen: {
    y: -100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.25
    }
  }
}
const viewport = { amount: 0.4, once: true }

const Demo = () => (
  <div className={styles.page}>
    <motion.div
      className={[styles.section, styles.hero].join(' ')}
      initial="offscreen"
      whileInView="onscreen"
      variants={container}
      viewport={viewport}
    >
      <div className={styles.hero_content}>
        <motion.h1 variants={child}>An award winning animation Demo</motion.h1>
        <motion.button variants={child} className={styles.hero_button}>
          AWESOME!
        </motion.button>
      </div>
      <img className={styles.hero_image} src="https://source.unsplash.com/1Shk_PkNkNw" alt="Hero" />
    </motion.div>

    <motion.div
      className={[styles.section, styles.column_2].join(' ')}
      initial="offscreen"
      whileInView="onscreen"
      variants={container}
      viewport={viewport}
    >
      <motion.div className={styles.heading} variants={child}>
        <h2>25 Healthy Smoothie Recipes</h2>
      </motion.div>
      <motion.div className={styles.content} variants={child}>
        <p>
          Sip your way to a healthier breakfast by blending your produce each morning. These smoothie recipes will get
          your day started off right by packing in nutrient-rich fruit and vegetables, plus protein-filled yogurt and
          milk for an energy boost that will keep you going until lunch.
        </p>
      </motion.div>
    </motion.div>

    <div className={[styles.section, styles.column_2].join(' ')}>
      <img className={styles.review_image} src="https://source.unsplash.com/fdlZBWIP0aM" alt="Review" />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={container}
        viewport={viewport}
        className={styles.review_container}
      >
        <motion.h2 variants={child} className={styles.review_heading}>
          Reviews
        </motion.h2>
        <motion.div variants={child} className={styles.review_content}>
          <p>
            We bring the season’s best mix of organic produce and hand-crafted farm products conveniently to your door
            by growing and partnering with local farms and artisans in your area.
          </p>
          <span>– LOO HUDSON</span>
        </motion.div>
      </motion.div>
    </div>
  </div>
)


export default Demo
