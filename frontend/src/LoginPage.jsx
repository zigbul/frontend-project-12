import { Formik, Form, Field } from 'formik';

const LoginPage = () => {
  return (
    <>
      Войти
      <Formik>
        <Form>
          <Field type="nickname" name="nickname" placeholder="Ваш ник" />
          <Field type="password" name="password" placeholder="Пароль" />
          <button type="submit">Войти</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginPage;
