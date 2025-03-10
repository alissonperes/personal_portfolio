import SectionTitle from './SectionTitle';
const Footer = () => {
  return (
    <section className='container' id='automation'>
      <SectionTitle text='Infra Automation' />
      <div className='d-sm-flex align-items-center justify-content-center'>
        <article className='p-2 py-md-3 px-md-5 col-md-9 col-xl-9'>
          <p className=''>
            As a DevOps engineer, my primary focus is on automating infrastructure using tools such as Terraform, AWS, Chef, and Docker for containerization. My role involves setting up and managing infrastructure while also integrating CI/CD pipelines with platforms like GitHub Actions, Azure DevOps, and Octopus to enhance the development and deployment processes.
          </p>
          <p className=''>
            To ensure smooth operation, I utilize monitoring systems including Grafana, AWS CloudWatch, and Dynatrace. This allows me to promptly identify and resolve issues in real-time.
          </p>
          <p className=''>
            My experience spans both large-scale networks and environments, having worked with ISPs and hosting companies that managed DNS, hosting, and email services for numerous users. Additionally, I’ve handled smaller organizations with more intricate setups, encompassing applications with databases, frontends, data warehouses, and microservices.
          </p>
          <p className=''>
            I have managed both containerized systems like OpenStack and traditional monolithic servers, providing me with a robust understanding of how to navigate the complexities of network infrastructure across different scales. My expertise in microservices further enhances my ability to handle complex, distributed architectures efficiently.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Footer;
