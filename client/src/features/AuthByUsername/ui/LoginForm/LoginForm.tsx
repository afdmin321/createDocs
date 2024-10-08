import { FC, memo, useCallback } from "react";
import cls from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input/Input";

import { Button, ThemeButton, typeButton } from "shared/ui/Button/Button";

import {
  AuthByUsernameAction,
  AuthByUsernameReducer,
} from "features/AuthByUsername/model/slice/AuthByUsernameSlice";
import { useSelector } from "react-redux";
import {
  getAuthError,
  getAuthIsLoading,
  getAuthPassword,
  getAuthUsername,
} from "features/AuthByUsername/model/selectors/AuthByUsernameSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchAuthByUsernameServices } from "features/AuthByUsername/model/services/fetchAuthByUsernameServices";
import { useNavigate } from "react-router-dom";

import { getUserAuthData } from "entities/User";
import { UserActions } from "entities/User/model/slice/UserSlice";
import { classNames } from "shared/lib/classNames/classNames";

interface Props {
  className?: string;
}

const LoginForm: FC<Props> = (props: Props) => {
  const { className, ...otherProps } = props;
  const username = useSelector(getAuthUsername);
  const password = useSelector(getAuthPassword);
  const isLoading = useSelector(getAuthIsLoading);
  const error = useSelector(getAuthError);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandlerButtonBack = useCallback(() => {
    dispatch(UserActions.logout());
  }, [dispatch]);
  const onChaneUsername = useCallback(
    (value: string) => {
      dispatch(AuthByUsernameAction.setUsername(value));
    },
    [dispatch, username]
  );
  const onChanePassword = useCallback(
    (value: string) => {
      dispatch(AuthByUsernameAction.setPassword(value));
    },
    [dispatch, password]
  );
  return (
    <div>
      {!authData?.token ? (
        <form
          className={classNames(cls.LoginForm, {}, [className])}
          {...otherProps}
          onSubmit={async (evt) => {
            evt.preventDefault();
            try {
              dispatch(fetchAuthByUsernameServices());
            } catch (err) {
              console.log(err);
            }
          }}
        >
          <Input
            className={cls.input}
            text="Имя пользователя"
            placeholder="Введите Имя пользователя"
            value={username}
            onChange={onChaneUsername}
            classNameText={cls.text}
          />
          <Input
            className={cls.input}
            text="Пароль"
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={onChanePassword}
            err={error}
            classNameText={cls.text}
          />

          <Button type={typeButton.SUBMITE} theme={ThemeButton.OUTLINE}>
            Войти
          </Button>
        </form>
      ) : (
        <Button theme={ThemeButton.OUTLINE} onClick={onHandlerButtonBack}>
          Выйти из аккаунта
        </Button>
      )}
    </div>
  );
};

export default memo(LoginForm);
