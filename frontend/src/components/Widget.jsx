import Card from "./TableComponents/Card";

const Widget = ({ icon, title, subtitle }) => {
  return (
    <Card extra="flex-grow items-center rounded-[20px] p-4">
      <div className="relative flex h-full w-full justify-end align top" >
        <div className="absolute -top-8 -left-8 rounded-full bg-lightPrimary p-3 dark:bg-navy-700 shadow-lg" >
          <span className="flex items-center text-brand-500 dark:text-white">
            <img src={icon} alt="" className="h-9 w-9" />
          </span>
        </div>
        <div className="flex w-auto flex-col justify-end ml-12 mt-8 text-right">
          <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
          <h4 className="text-xl font-bold text-navy-700 dark:text-black">
            {subtitle}
          </h4>
        </div>
      </div>
    </Card>
  );
};

export default Widget;
