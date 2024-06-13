function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-2xl dark:!bg-navy-800 dark:text-white dark:shadow-none ${extra}`}
      style={{
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.1)';
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;

  