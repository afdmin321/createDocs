import { FormCard } from "features/FormCard";
import "./styles/index.scss";
import { SetingDocuments } from "entities/SetingDocuments";
import { useState } from "react";
import { Cards } from "entities/Cards";

const App = () => {
    const [addDoc, setAddDoc] = useState(false)
    const onAddDocHandler = () => {
        setAddDoc((prev) => !prev)
    }
    return <div className="app theme-light">
        <SetingDocuments addDoc={addDoc} onAddDocHandler={onAddDocHandler} />
        {addDoc && <FormCard onAddDocHandler={onAddDocHandler} classNames="theme-dark" />}
        <Cards />
    </div>;
};
export default App;
