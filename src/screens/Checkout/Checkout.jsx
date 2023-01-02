import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore/lite";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { TextInput } from "../../components/TextInput/TextInput";
import { DataContext } from "../../context/DataProvider";
import "./Checkout.css";

const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const { resetCart, cart } = useContext(DataContext);
  const navigate = useNavigate();

  const isEmailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const amount = cart.reduce((acc, product) => acc + product.price, 0);
      const queryDb = getFirestore();
      const ordersCollection = collection(queryDb, "Orders");
      await addDoc(ordersCollection, {
        created: serverTimestamp(),
        buyer: {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email,
        },
        cart: cart,
        amount: amount,
      });
      resetCart();
      alert(
        `Muchas gracias ${firstName} ${lastName}\nSu factura ha sido enviada a ${email}`
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="checkout__product-container">
      <h1 className="checkout__main-title">Ingresá tus datos</h1>
      <div className="checkout__form-container">
        <form>
          <TextInput
            label="Nombre:"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value.trim())}
            style={{ marginBottom: "3rem" }}
            required
            placeholder="Ingrese su nombre"
          />
          <TextInput
            label="Apellido:"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value.trim())}
            style={{ marginBottom: "3rem" }}
            required
            placeholder="Ingrese su apellido"
          />
          <TextInput
            label="Teléfono:"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value.trim())}
            style={{ marginBottom: "3rem" }}
            required
            type="phone"
            placeholder="Ingrese su teléfono"
          />
          <TextInput
            label="Email:"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value.trim())}
            style={{ marginBottom: "3rem" }}
            required
            placeholder="Ingrese su email"
          />
          <TextInput
            label="Repetir email:"
            name="emailConfirmation"
            type="emailConfirmation"
            value={emailConfirmation}
            onChange={(e) => setEmailConfirmation(e.currentTarget.value.trim())}
            style={{ marginBottom: "3rem" }}
            required
            placeholder="Vuelva a ingresar su email"
          />
          <Button
            text="Finalizar compra"
            type="submit"
            onClick={handleSubmit}
            disabled={
              !firstName ||
              !lastName ||
              !phone ||
              !email ||
              !isEmailValid ||
              email !== emailConfirmation
            }
          />
        </form>
      </div>
    </div>
  );
};

export { Checkout };
