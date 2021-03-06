import React from 'react';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  setVisible(entry.isIntersecting);
              }
          });
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
  }, []);
  return (
      <div
          className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}
      >
          {props.children}
      </div>
  );
}

function App() {
  
  return (
<div>
<div className="title">
  <div id="image" align="left">
    <a href="https://discord.vojkovic.xyz">
      <svg
        id="widelogo"
        width="10vw"
        length="5vw"
        style={{ marginTop: "2.5vw", marginLeft: "5vw" }}
        alt=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 539.82 86.74"
      >
        {" "}
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".cls-1,.cls-2{fill:#fff;}.cls-2{stroke:#231f20;stroke-miterlimit:10;}"
            }}
          />
        </defs>
        <g id="图层_2" data-name="图层 2">
          <g id="Discord_Logos" data-name="Discord Logos">
            <g
              id="Discord_Logo_-_Large_-_White"
              data-name="Discord Logo - Large - White"
            >
              <path
                className="cls-1"
                d="M195.69,70.24h32q11.58,0,19.59,3.61a26.39,26.39,0,0,1,12,10.07,28.78,28.78,0,0,1-.15,29.49,28,28,0,0,1-12.66,10.47q-8.49,3.87-21.06,3.86H195.69Zm29.4,42.87q7.8,0,12-3.9a13.81,13.81,0,0,0,4.19-10.64,13.47,13.47,0,0,0-3.73-10q-3.75-3.73-11.3-3.74h-10v28.25Z"
                transform="translate(-52.24 -60.13)"
              />
              <path
                className="cls-1"
                d="M311.25,127.65a43.41,43.41,0,0,1-12-5V109a32.43,32.43,0,0,0,10.79,5.14,46.26,46.26,0,0,0,13.11,2,10.14,10.14,0,0,0,4.48-.78c1-.51,1.51-1.17,1.51-1.85a2.72,2.72,0,0,0-.82-2,7.21,7.21,0,0,0-3.2-1.4l-9.86-2.22q-8.46-2-12-5.45a13.15,13.15,0,0,1-.4-17.46,20,20,0,0,1,8.87-5.46,42.08,42.08,0,0,1,13.47-1.93A50.88,50.88,0,0,1,337.84,79a35.79,35.79,0,0,1,9.52,3.78V95.71a35.13,35.13,0,0,0-8.91-3.65,39.62,39.62,0,0,0-10.39-1.36c-5.14,0-7.72.88-7.72,2.63a2,2,0,0,0,1.18,1.85,19.11,19.11,0,0,0,4.38,1.27l8.22,1.48q8,1.41,11.93,4.92T350,113.16A13.62,13.62,0,0,1,343.46,125q-6.49,4.35-18.53,4.34A54.4,54.4,0,0,1,311.25,127.65Z"
                transform="translate(-52.24 -60.13)"
              />
              <path
                className="cls-1"
                d="M369.4,125.92a24.67,24.67,0,0,1-10.64-9.38,25.31,25.31,0,0,1-3.52-13.31A24.22,24.22,0,0,1,358.93,90a24.87,24.87,0,0,1,10.84-9.15,40.18,40.18,0,0,1,17.09-3.34q12.31,0,20.45,5.18v15a25.59,25.59,0,0,0-6.69-3.2,26.32,26.32,0,0,0-8.21-1.23q-7.65,0-12,2.79a8.38,8.38,0,0,0-.12,14.58q4.2,2.84,12.16,2.83a28,28,0,0,0,8.09-1.17,30.53,30.53,0,0,0,6.86-2.92V124a39.9,39.9,0,0,1-20.95,5.43A38.57,38.57,0,0,1,369.4,125.92Z"
                transform="translate(-52.24 -60.13)"
              />
              <path
                className="cls-1"
                d="M427.76,125.92a25.51,25.51,0,0,1-10.85-9.38,24.84,24.84,0,0,1-3.74-13.39A23.82,23.82,0,0,1,416.91,90a25.11,25.11,0,0,1,10.8-9.08,44.81,44.81,0,0,1,33.68,0,24.94,24.94,0,0,1,10.76,9,24,24,0,0,1,3.69,13.22,24.4,24.4,0,0,1-14.49,22.78,42.61,42.61,0,0,1-33.59,0Zm25-14.57a10.72,10.72,0,0,0,3-7.93,10.45,10.45,0,0,0-3-7.84,11.21,11.21,0,0,0-8.22-2.92,11.32,11.32,0,0,0-8.21,2.92,10.41,10.41,0,0,0-3,7.84,10.72,10.72,0,0,0,3,7.93,11.17,11.17,0,0,0,8.21,3A11,11,0,0,0,452.72,111.35Z"
                transform="translate(-52.24 -60.13)"
              />
              <path
                className="cls-1"
                d="M525.2,80.56V98.33a14.61,14.61,0,0,0-8.13-2.06c-4.37,0-7.75,1.34-10.1,4s-3.52,6.77-3.52,12.36v15.11H483.33v-48H503V94.94q1.63-8.39,5.3-12.36a12.18,12.18,0,0,1,9.39-4A13.72,13.72,0,0,1,525.2,80.56Z"
                transform="translate(-52.24 -60.13)"
              />
              <path
                className="cls-1"
                d="M592.06,68.59v59.14H571.94v-10.8a19.07,19.07,0,0,1-7.77,9.25,24.38,24.38,0,0,1-12.79,3.19,21.25,21.25,0,0,1-11.91-3.32,21.78,21.78,0,0,1-7.91-9.12,30.16,30.16,0,0,1-2.74-13.1,29,29,0,0,1,2.91-13.55,22.76,22.76,0,0,1,8.46-9.39,23.3,23.3,0,0,1,12.44-3.37Q567,77.52,571.94,90V68.59ZM569,111.07a10.36,10.36,0,0,0,3.08-7.77A9.88,9.88,0,0,0,569,95.81a12.92,12.92,0,0,0-16.3,0,10.08,10.08,0,0,0-3,7.6,10.21,10.21,0,0,0,3.08,7.66,11.06,11.06,0,0,0,8,2.94A11.2,11.2,0,0,0,569,111.07Z"
                transform="translate(-52.24 -60.13)"
              />
              <ellipse
                className="cls-1"
                cx="228.01"
                cy="15.65"
                rx="10.03"
                ry="9.01"
              />
              <path
                className="cls-1"
                d="M270.21,91a25.88,25.88,0,0,0,20.07,0v37H270.21Z"
                transform="translate(-52.24 -60.13)"
              />
            </g>
          </g>
        </g>
        <path
          className="cls-1"
          d="M86.41,108.32a25.11,25.11,0,0,0,4.78,7,25.4,25.4,0,0,0,9.13,6A46.61,46.61,0,0,1,81.7,141c-12.06,6.62-27.67,7.48-29.33,3.55-1.1-2.61,4.46-6.21,19.54-21.18C78.25,117,83.24,111.75,86.41,108.32Z"
          transform="translate(-52.24 -60.13)"
        />
        <path
          className="cls-1"
          d="M88.08,101.6c-.69,7.56,5.43,14.71,12.24,16.81a13.18,13.18,0,0,0,7.13.37c6.86-1.67,12.11-9.45,10.44-13.43-1.35-3.2-6-1.16-11-5.57s-4.27-9.93-7.86-10.6c-2.79-.53-5.56,2.38-6.94,3.83A14.93,14.93,0,0,0,88.08,101.6Z"
          transform="translate(-52.24 -60.13)"
        />
        <path
          className="cls-2"
          d="M65.36,128.07"
          transform="translate(-52.24 -60.13)"
        />
        <path
          className="cls-1"
          d="M135.54,66.07h0a1.64,1.64,0,0,0-2.33.35L108.69,96.36a1.74,1.74,0,0,0,.07,2.42h0a1.64,1.64,0,0,0,2.34-.34L135.61,68.5A1.75,1.75,0,0,0,135.54,66.07Z"
          transform="translate(-52.24 -60.13)"
        />
        <path
          className="cls-1"
          d="M131.87,63.19h0a1.6,1.6,0,0,0-2.29.28L106.14,92.12a1.72,1.72,0,0,0,.12,2.37h0a1.6,1.6,0,0,0,2.29-.29L132,65.55A1.72,1.72,0,0,0,131.87,63.19Z"
          transform="translate(-52.24 -60.13)"
        />
        <path
          className="cls-1"
          d="M127.55,60.51h0a1.54,1.54,0,0,0-2.21.2L103.48,87.48a1.64,1.64,0,0,0,.19,2.27h0a1.54,1.54,0,0,0,2.22-.2l21.85-26.76A1.64,1.64,0,0,0,127.55,60.51Z"
          transform="translate(-52.24 -60.13)"
        />
        <path
          className="cls-1"
          d="M139.29,69h0a1.59,1.59,0,0,0-2.27.25l-22.85,28a1.68,1.68,0,0,0,.15,2.33h0a1.58,1.58,0,0,0,2.26-.25l22.85-28A1.68,1.68,0,0,0,139.29,69Z"
          transform="translate(-52.24 -60.13)"
        />
        <path
          className="cls-1"
          d="M142.64,72.63h0a1.55,1.55,0,0,0-2.22.2L118.57,99.6a1.64,1.64,0,0,0,.19,2.27h0a1.54,1.54,0,0,0,2.22-.2l21.85-26.76A1.65,1.65,0,0,0,142.64,72.63Z"
          transform="translate(-52.24 -60.13)"
        />
      </svg>
    </a>
  </div>
  <div id="nav">
    <div style={{ display: "inline" }}>
      <p className="links">
        <a href="#About">About</a> {'  '}
        <a href="#Products">Products</a> {'  '}
        <a href="#Goals">Goals</a> {'  '}
        <a href="#Merch">Merch</a> {'  '}
        <a href="#Legal">Legal</a>
      </p>
    </div>
  </div>
  <h1>We've Rebranded...</h1>
  <p className="pwhite">
    ... after the past six years, we've made the decision to shutdown <br />
    our VoIP services. Today, we reveal our latest products, cords. <br />
    We're hoping you're as excited as us for the next step.{" "}
  </p>
  <p className="pwhite" style={{ paddingBottom: "5vw" }}>
      Forget the Discord of Yesterday. <br /> The Discord of Tomorrow is Here.
  </p>
</div>
<div className="info">
<FadeInSection>
<video width="auto" controls style={{float: 'left', margin: '10vw', maxWidth: '30vw', minHeight: '5vw', aspectRatio: '16 / 9'}} alt="">
  <source src="Videos/video.webm" type="video/webm" /> </video>
    <div className="rtext" id="About">
      <h3> About </h3>
      <p className="pblack">
        At Discord, our main motive has always been to bring people together.
        However, over the years, we've realised that video calls and group chats
        just aren't the way to do it. We've seen case after case of youth with
        heightened mental health issues due to our services. We can no longer
        deny that social media is harming our youth. The Discord of the future
        will cease this harming of our children and we can finally complete our
        goal of bringing people together.
      </p>
    </div>
    </FadeInSection>
  </div>
  <div className="offinfo">
  <FadeInSection>
  <div className='rightimages'>
  <img src="Pictures/products.svg" alt=""draggable="false" controls />
  </div>
    <div id="Products" className="ltext">
      <h3> Products </h3>
      <p className="pblack">
        Discord is proud to release our latest products, a vast suite of cords.
        Yes, that's right. We're putting the cord back into Discord. Regardless
        of if you're a home consumer or professional, we'll be sure to make
        high-quality cords you'll love. The sale of premium quality cords
        commences today. We'll be creating the perfect VGA, DVI, fibre optic
        Ethernet, USB, 5mm Audio, PS/2 and our flagship HDMI cables. This HDMI
        cable will revolutionise the industry. Discord's patented conductor
        allows for a new range of video resolutions and refresh rates. Out of
        the box, this cord can run an 8K display at 160Hz or 4K at 360Hz.
        Furthermore, this will be the first cord to support a 16K resolution.
        Dynamic HDR formats are supported, ensuring your display is true to
        life.
      </p>
    </div>
    </FadeInSection>
  </div>
  <div className="info">
    <FadeInSection>
    <div className='leftimages'>
    <img src="./Pictures/goals.svg" alt=""draggable="false" />
    </div>
    <div id="Goals" className="rtext">
      <h3> Goals </h3>
      <p className="pblack">
        As mentioned before, we want to stop harming youth who are using our
        platform. With the conclusion of the 2021 Glasgow climate summit, we've
        reevaluated our commitment to the climate. We've doubled down on our
        sustainability by shutting down our costly fossil fuel-powered server
        infrastructure. Furthermore, all cords produced by Discord will be 100%
        recycled and will be fair trade certified. Rare metals inside cables
        often are obtained from exploiting developing nations and children. We
        commit to working closely with our material suppliers, ensuring this
        event will never happen at Discord. Our last goal is to produce
        high-quality cables that are loved by a range of people
      </p>
    </div>
    </FadeInSection>
  </div>
  <div className="offinfo">
    <FadeInSection>
    <div className='rightimages'>
    <img src="Pictures/merch.svg" alt=""draggable="false" controls/>
    </div>
    <div id="Merch" className="ltext">
      <h3> Merch </h3>
      <p className="pblack">
        With Discord's rebrand, we're also extremely excited to launch a new
        merchandise line. These clothing items, ranging from shirts to socks,
        are all extraordinarily high quality. All new merchandise items are
        created from sustainable high-grade cotton and are produced ethically.
      </p>
    </div>
    </FadeInSection>
  </div>
  <div className="end" id="Legal">
    <h2 style={{ marginLeft: "10vw", marginTop: "10vw" }}>
      {" "}
      Legal
    </h2>
    <div className="box" style={{ marginLeft: "10vw" }}>
      {" "}
      <h2 style={{ fontSize: "1.5vw" }}>Typefaces</h2>{" "}
      <p className="pwhite">
        {" "}
        <a href="https://abcdinamo.com/typefaces/ginto">Ginto Nord</a>
      </p>{" "}
      <p className="pwhite">
        {" "}
        <a href="http://www.onlinewebfonts.com">Whitney</a>
      </p>
    </div>
    <div className="box">
      {" "}
      <h2 style={{ fontSize: "1.5vw" }}>Discord</h2>{" "}
      <p className="pwhite" style={{ fontSize: "1vw" }}>
        The Discord name is a trademark of Discord INC.
      </p>
    </div>
    <div className="box">
      {" "}
      <h2 style={{ fontSize: "1.5vw" }}>Music</h2>{" "}
      <p className="pwhite" style={{ fontSize: "1vw" }}>
        {" "}
        "Get Some" by Lykke Li.{" "}
      </p>
    </div>
    <div className="box" style={{ marginRight: "10vw", marginBottom: "10vw" }}>
      {" "}
      <h2 style={{ fontSize: "1.5vw" }}>Source</h2>{" "}
      <p className="pwhite" style={{ fontSize: "1vw" }}>
        {" "}
        The source markup for this website is available on{" "}
        <a href="https://github.com/codingbrock/discordrebrand">Github</a>. This
        website is licensed under GPL 3.0.
      </p>{" "}
    </div>
  </div>
</div>
  );
}

export default App;
