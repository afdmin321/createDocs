import { FormCard } from "features/FormCard";
import "./styles/index.scss";
import { SetingDocuments } from "entities/SetingDocuments";
import { useEffect, useState } from "react";
import { Cards } from "entities/Cards";
import { useSelector } from "react-redux";
import { getUserAuthData, getUserInited } from "entities/User";
import { LoginForm } from "features/AuthByUsername";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { UserActions } from "entities/User/model/slice/UserSlice";
import { fetchCheckToken } from "entities/User/model/services/fetchCheckToken";

const App = () => {
  const [addDoc, setAddDoc] = useState(false);
  const onAddDocHandler = () => {
    setAddDoc((prev) => !prev);
  };
  const user = useSelector(getUserAuthData);
  const inited = useSelector(getUserInited);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(UserActions.initAuthData());
  }, [dispatch]);
  useEffect(() => {
    if (user?.token && inited) {
        console.log(522)
      dispatch(fetchCheckToken());
    }
  }, [inited]);
  return (
    <div className="app theme-light">
      {!user?.token ? (
        <LoginForm />
      ) : (
        <div>
          {" "}
          <SetingDocuments addDoc={addDoc} onAddDocHandler={onAddDocHandler} />
          {addDoc && (
            <FormCard
              onAddDocHandler={onAddDocHandler}
              classNames="theme-dark"
            />
          )}
          <Cards />
        </div>
      )}
    </div>
  );
};
export default App;
