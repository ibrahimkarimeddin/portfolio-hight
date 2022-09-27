import { domAnimations } from "framer-motion"


// index.js
import { LazyMotion, m } from "framer-motion"

const loadFeatures = import("./index.js")
  .then(res => res.default)

export default function Motion() {
  return (
    <LazyMotion features={loadFeatures}>
      <m.div animate={{ scale: 1.5 }} />
    </LazyMotion>
  )
}