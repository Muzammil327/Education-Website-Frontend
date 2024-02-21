import Link from "next/link";



export default function Header(props: { title: string }) {

  return (
    <section className="header">
     
      <div className="hero">
        <div className="bg1" aria-hidden="true">
          <div className="icon" />
        </div>
        <div className="text">
          <div className="firstPart">
            <div className="inner">
              Announcing our next round of funding.{" "}
              <Link href="/">
                <span aria-hidden="true" />
                Read more
              </Link>
            </div>
          </div>
          <div className="secondPart">
            <h1>{props.title}</h1>
            <p>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="btn-group">
              <Link href="#" className="btn1">
                Get started
              </Link>
              <Link href="#" className="btn2">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
}
