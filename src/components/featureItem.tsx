import type React from "react"
import type { FeatureItemProps } from "../types/featureItems"

const FeatureItem: React.FC<FeatureItemProps> = ({ src, alt, title, paragraph }) => {
    return (
        <div className="feature-item">
            <img src={src} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{paragraph}</p>
        </div>
    )
}

export default FeatureItem