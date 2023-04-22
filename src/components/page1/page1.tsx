import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h2>Body</h2>
      <Link to={"/page2"}>
        <button> Ir para a page2</button>
      </Link>
      <Link to={"/"}>
        <button> Ir para o Home</button>
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quae,
        nostrum laudantium veniam mollitia aspernatur unde? Nemo dignissimos
        nulla, quaerat odio laborum corporis possimus optio voluptatem nobis
        quibusdam totam consequatur.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam soluta
        quo, id fugit aliquam labore quibusdam consequuntur ipsam iure, quaerat
        eius harum! Laborum, porro? Fugiat libero omnis et laboriosam in!
      </p>
    </div>
  );
};
