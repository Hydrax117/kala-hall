export const ServiceCard = ({
  serviceName,
  image,
  serviceIcon,
  serviceDesc,
}) => {
  return (
    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay={200}>
      <div className="service-item">
        <div className="img">
          <img src={image} className="img-fluid" alt="" />
        </div>
        <div className="details position-relative">
          <div className="icon">{serviceIcon}</div>
          <h3>{serviceName}</h3>
          <p>{serviceDesc}</p>
        </div>
      </div>
    </div>
  );
};
