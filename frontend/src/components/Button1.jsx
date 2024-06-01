const Button1 = (props) => {
    return (
      
      <button onClick={props.func} className="mx-5 rounded-2xl border-2 border-dashed border-sky-900 bg-sky-100 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        {props.title}
      </button>
      
    );
  };
  
  export default Button1;