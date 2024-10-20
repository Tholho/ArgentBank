import FeatureItem from "./featureItem";

const Features: React.FC = () => {
    return(
        <>
        <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
        src="./img/icon-chat.png"
        alt="Chat Icon"
        title="You are our #1 priority"
        paragraph="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
                src="./img/icon-money.png"
                alt="Money Icon"
        title="More savings means higher rates"
        paragraph="The more you save with us, the higher your interest rate will be!
"
        />
        <FeatureItem
                src="./img/icon-security.png"
                alt="Secure Icon"
        title="Security you can trust"
        paragraph="We use top of the line encryption to make sure your data and money is always safe."
        />
        </section>
        </>
    )
}

export default Features