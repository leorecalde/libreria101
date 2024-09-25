import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

const Login2 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset()
  };

  return (
    <section className="container mt-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Email:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              {...register("email", {
                required: "Para loguearte debes ingresar un mail registrado",
                maxLength: {
                  value: 50,
                  message: "excediste el maximo de caracteres",
                },
                pattern:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:a-z0-9?\.)+a-z0-9?$/,
              })}
              type="email"
              placeholder="pepitojuarez@gmail.com"
            />
          </Col>
        </Form.Group>
        <Form.Text className="text-danger mb-3">
          {errors.email?.message}
        </Form.Text>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Contraseña:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              {...register("contrasenia", {
                minLength: {
                  value: 8,
                  message: "la contraseña debe tener un minimo de 8 carácteres",
                },
                maxLength: {
                  value: 16,
                  message:
                    "la contraseña debe tener un maximo de 16 caracteres",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "tu contraseña debe tener incluir minusculas, mayusculas, numeros y un caracter especial",
                },
              })}
              type="password"
              placeholder="contraseña"
            />
          </Col>
        </Form.Group>
        <Form.Text className="text-danger mb-3">
          {errors.contrasenia?.message}
        </Form.Text>
        <div className="d-flex justify-content-end">
          <Button variant="primary" type="submit" className="">
            Ingresar
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Login2;
