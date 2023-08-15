import FAQContainer from "../components/FAQContainer";
import styles from "./LoggworksContainer.module.css";

const LoggworksContainer = () => {
  return (
    <div className={styles.faqParent}>
      <FAQContainer
        descriptionText="What is Loggworks?"
        iconschevronDownBorderBottom="1px solid var(--grey-801)"
        propDisplay="flex"
      />
      <FAQContainer
        descriptionText={`General Terms & Conditions (GTC)`}
        propDisplay="none"
      />
      <FAQContainer descriptionText="Where is the pool?" propDisplay="none" />
      <FAQContainer
        descriptionText="Do I have the right to return an item?"
        propDisplay="none"
      />
      <FAQContainer
        descriptionText="Can I reserve a magazine via Phone or E-mail?"
        propDisplay="none"
      />
      <FAQContainer
        descriptionText="Why do the prices in the shop sometimes change?"
        propDisplay="none"
      />
      <FAQContainer
        descriptionText="Can I reserve a magazine via Phone or E-mail?"
        propDisplay="none"
      />
      <FAQContainer
        descriptionText="Can I change the displayed currency?"
        propDisplay="none"
      />
      <FAQContainer
        descriptionText="Can I order a free copy of a magazine to sample?"
        propDisplay="none"
      />
      <FAQContainer
        descriptionText="Information for Press and Media"
        iconschevronDownBorderBottom="unset"
        propDisplay="none"
      />
    </div>
  );
};

export default LoggworksContainer;
