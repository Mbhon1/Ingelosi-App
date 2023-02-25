import { CgCopyright } from "react-icons/cg";

export default function MyFooter(props) {
  return (
    <div className="bg-[url(/footer.jpeg)] bg-cover bg-center h-[100px]  text-white grid place-items-center">
      <div className="text-center text-xl backdrop-blur-md backdrop-brightness-50">
        <p>Maintained by Mbhoni</p>
        <p className="flex items-center">
          <CgCopyright className="mr-1" /> {props.date} {props.rights}
        </p>
      </div>
    </div>
  );
}
