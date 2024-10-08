import React, { useState } from "react";
import { useParams } from "react-router-dom";
import blog1 from "../img/blog/blog-s-1-1.jpg";
import blog2 from "../img/blog/blog-s-1-2.jpg";
import blog3 from "../img/blog/blog-s-1-2.jpg";
import blogimg1 from "../img/blog/blog_inner_1.jpg";
import "./blogdeatils.css";

// Dummy data for blogs

const BlogDetails = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    website: "",
    comment: "",
    saveDetails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };
  const blogs = [
    {
      id: 1,
      image: blog1,
      author: "Blog",
      date: "September 27, 2024",
      category: "Tour Guide",
      title: "Best Travel Agents in Chennai",
      content: (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-lg-11">
                <div className="th-blog blog-single">
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        <i className="fa-light fa-user"></i>by David Smith
                      </a>
                      <a href="blog.html">
                        <i className="fa-regular fa-calendar"></i>05 May, 2024
                      </a>
                      <a href="blog-details.html">
                        <img src="assets/img/icon/map.svg" alt="" />
                        Sea Beach
                      </a>
                    </div>
                    <h1 className="blog-title">
                      Explore The New Destinations With Unlimited Happiness –
                      Capstone Holidays Is the Best Travel Agents In Chennai
                    </h1>
                    <p className="blog-text mb-30">
                      If you want to refresh your soul, don’t worry our best
                      travel agents in Chennai are there for you!...
                    </p>
                    <p className="blog-text mb-30">
                      Are you tired of doing daily chores, don’t worry our best
                      travel agents at Capstone Holidays are there for you!...
                    </p>
                    <blockquote>
                      <p>
                        If you are looking to explore new venues, don’t worry we
                        are there for you!...
                      </p>
                    </blockquote>
                    <p className="blog-text mb-30">
                      We have a solution for you! Book your trip in the Capstone
                      Holidays. There’s no way to find your happiness without
                      exploring a new place that’s why our Capstone travel
                      agents are there for you!...
                    </p>

                    <h3 className="mt-4">
                      Why Capstone Holidays has the best travel agents in
                      Chennai?
                    </h3>
                    <p>
                      Absolutely! Capstone Holidays is the best travel agents in
                      Chennai. Wherever you go you can’t find the best
                      agents(international travel agents and domestic travel
                      agents) in Chennai like Capstone Holidays. If you are
                      searching for the best tour providers then why are you
                      waiting? Reach us immediately. International Travel Agent
                      | Best Travel Agency in Chennai..
                    </p>
                    <div className="row gy-4">
                      <div className="col-12">
                        <div className="blog-img">
                          <img
                            className="w-100"
                            src={blogimg1}
                            alt="Blog Image"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="mb-0">
                      All travel agents in Chennai are only focused on booking a
                      plan of their own, but we are absolutely not like that. We
                      give importance to customer’s happiness, satisfaction,
                      peace, and comfort. This has the best travel agents in
                      Chennai, The travel agents give you fantastic memories as
                      per your wish.
                    </p>
                    <h3 className="mt-4">
                      BORING! BORING! What’s your actual plan today? Every day
                      you go to the office and then come home, is this your
                      daily routine in life?
                    </h3>
                    <p>
                      With our Capstone Holidays tour package, our local travel
                      agents are here to guide you to make an amazing trip. We
                      have the most promising and the best travel agents in
                      Chennai compared to other ones. We are anytime accessible
                      and the one who prefers your comfort.
                    </p>
                    <p>
                      They treat you like a friend and take you to exciting
                      travel destinations around the globe. Now, grab your
                      peaceful tour at the best travel agents in Chennai i.e.,
                      Capstone Holidays. You may have a question about why
                      Capstone Holidays is one of the best travel agencies in
                      Chennai. It is because of the unbelievable service and at
                      the same time transparency which is a driving factor why
                      customers increase and increase day by day.
                    </p>
                    <p>
                      The other reason why Capstone Holidays remains the best
                      travel agents in Chennai is because of the exciting
                      inclusions present in the travel itinerary. The travel
                      itinerary consists of <strong>food</strong>,{" "}
                      <strong>accommodation</strong>,
                      <strong>sightseeing entry tickets</strong>,{" "}
                      <strong>internal transfer</strong> and so much more to
                      provide you with a comfortable journey. At the same time,
                      whenever you are planning a trip, our best travel agents
                      in Chennai will take care of all your needs and strive to
                      make your journey successful.
                    </p>
                    <h3 className="mt-4">Best Travel Agents in Velachery</h3>
                    <p>
                      Let us tell you more about our best travel agents in
                      Velachery. If you want to explore new destinations without
                      any restrictions, then don’t worry, we have the best ones
                      in Velachery.
                    </p>
                    <p>
                      They will take care of your satisfaction and peace
                      throughout the journey. Capstone holidays concentrate on
                      your lovely trip that’s why we set up extraordinary and
                      best travel agents in Velachery. Our local travel agents
                      will assure you of lifetime memories. If you are searching
                      for the best travel agents in Chennai, then reach us on
                      Capstone Holidays where there are so many branches found
                      in Chennai itself.
                    </p>
                    <p>
                      We are also a recognized international travel agent among
                      trip lovers. We make a trip plan with affordable cost,
                      hassle-free, and limitless enjoyment. Don’t waste your
                      time, just reach out to us on Capstone Holidays who are
                      the best travel agents in Velachery and the best travel
                      agents in Chennai. We aim to ensure customers limitless
                      happiness and wonderful memories, that’s why we are loved
                      and selected by most tour lovers.
                    </p>

                    <h3 className="mt-4">Best travel agents in Madipakkam</h3>
                    <p>
                      Capstone Holidays has the best travel agents in Madipakkam
                      which is a dream come true moment for our customers. If
                      you want a fabulous journey experience, you will
                      definitely require good travel agents. Capstone Holidays
                      is good at understanding our customer’s needs and
                      satisfaction, so we’re made as the best travel agents in
                      Madipakkam and the best travel agents in Chennai.
                    </p>
                    <p>
                      Our team experts are excellent tour operators and provide{" "}
                      <strong>24*7 service for customers.</strong> We put
                      extreme effort into making your trip a successful one. You
                      will see the amazing tourism service through our best
                      travel agents in Madipakkam.
                    </p>
                    <p>
                      Trust! Your trip is going to fill your blank life with
                      awesome memories. We are absolutely loyal and best travel
                      agents in Chennai. Madippakkam surrounding peoples are
                      fortunate because Capstone Holidays focuses on setting up
                      the best travel agents in Madippakkam.
                    </p>
                    <p>
                      Explore the top trending spots in the world via Capstone
                      Holidays. We are mainly focused on good environment tours
                      for customers. Don’t waste your time just reach out to us
                      on Capstone Holidays who are the best travel agents in
                      Chennai. The Capstone Holidays has the best travel agents
                      in Madipakkam for providing customers with unimaginable
                      trips.
                    </p>

                    <h3 className="mt-4">
                      Why travel agents might be your best companion? Capstone
                      Holidays has the best travel agents in Tharamani
                    </h3>
                    <p>
                      Capstone Holidays is the best travel agent in Tharamani.
                      Our travel agents in Chennai are better buddies for you.
                      We have experienced and best travel agents in Tharamani as
                      you think, that’s why we are the best travel agents in
                      Chennai.
                    </p>
                    <p>
                      The Capstone Holidays is the most well-known travel agent
                      in Chennai. Our travel agents in Chennai are experts in
                      managing and guiding suitable tours for you. The best
                      travel agents in Tharamani Capstone Holidays take care
                      from pick up to drop and fulfill your needs. They will
                      provide round-the-clock customer service, and ensure your
                      happiness.
                    </p>
                    <p>
                      Our travel agents in Chennai are always there for you, so
                      don’t hesitate to reach us for the best travel agents in
                      Tharamani. The Capstone Holidays travel agents assist you
                      for trip and take care of accommodation, too. We are the
                      trustworthy travel agents in Tharamani, you can reach that
                      expert. They will make sure your pleasure and wonderful
                      memories through trips.
                    </p>

                    <h3 className="mt-4">
                      Make your delightful trip with the best travel agents in
                      Perungudi
                    </h3>
                    <p>
                      The Capstone Holidays is one of the best travel agencies
                      in Chennai known for its customer’s personalized trip
                      plans and extraordinary services. Capstone Holidays travel
                      agents guarantee to make your trip both memorable and
                      enjoyable. Our travel agents in Chennai are experts in
                      every corner for customers’ comfort. One of the best
                      travel agents in Perungudi are placed to provide
                      extraordinary customer services and stress-free trips
                    </p>
                    <p>
                      The Capstone Holiday’s ultimate goal is to set up the best
                      travel agents in Chennai for customers’ ideal trips. We’re
                      one of the best travel agents in Perungudi to provide an
                      awesome experience for travel lovers.
                    </p>

                    <h3 className="mt-4">
                      Explore the globe with the best travel agents in Chennai
                    </h3>
                    <p>
                      If you have decided to explore the world, you need
                      trustworthy and best travel agents in Chennai. So, no
                      worries, Capstone holidays are here for you. We are the
                      ones to make sure your trip is fun, joyful, and
                      hassle-free. Making a delightful trip is not easy without
                      a trustworthy travel agent.
                    </p>
                    <p>
                      Customers trust us for our perfect service which we carry
                      till the end of the trip. So, book your holidays now in
                      our Capstone Holidays to learn about the excellent service
                      that our international travel agents and domestic travel
                      agents provide throughout the journey.
                    </p>
                    <p>
                      Travel makes life easier and it is the best medicine for
                      all the stress you face in your life. So, travel with us
                      and explore the world with Capstone Holidays which remains
                      the best travel agent in Chennai.
                    </p>

                    <h3 className="mt-4">
                      Are you looking for an international trip at an affordable
                      cost? Yeah, then Capstone Holidays has an international
                      tour package for you!
                    </h3>
                    <p>
                      Are you worried about the cost of an international tour?
                      If you are looking for an international trip at a
                      reasonable cost at the same time with a good travel agent,
                      Capstone Holidays has the best travel agents in Chennai to
                      provide an international tour package at a reasonable
                      price.
                    </p>
                    <p>
                      Capstone Holidays has the best travel agents in Chennai to
                      fulfill your dreams of international trips. We will take
                      care of flights, accommodations, and food, what you have
                      to do is just relax and enjoy your trip. Everyone enjoys
                      traveling but it is really something awesome when it comes
                      to an international trip.
                    </p>
                    <p>
                      Capstone Holidays <strong>international travel</strong>{" "}
                      agent provides extraordinary and innovative tour packages
                      for you. The package consists of innovative plans for both
                      families and is ideal for couples. From children to older
                      people, you will undoubtedly enjoy the trip and also get
                      attracted to our exclusive inclusions in tour packages.
                    </p>
                    <p>
                      The trip offers you a comfortable stay by selecting the
                      top-notch resorts and restaurants present in the
                      world-class destinations. So, Get ready to vibe your
                      international trip offered by the best international
                      travel agents in Chennai for Capstone Holidays.
                    </p>

                    <h3 className="mt-4">
                      Are you a person looking to explore something out of the
                      country? Reach our best travel agents in Chennai for the
                      Capstone Holidays.
                    </h3>
                    <p>
                      Capstone Holidays has the best travel agents in Chennai
                      which give awesome memories beyond your thoughts. Everyone
                      gets excited when you think of an international trip, if
                      that happens in your life it is a real bliss. That’s why
                      we are there for you, Capstone Holidays has set up
                      international tour packages for customers.
                    </p>

                    <p>
                      Our international travel agent will bring you a wonderful
                      and peaceful international trip. Our Capstone travel
                      agents are experts who will guide you from pick up to
                      drop. They understand your preferences and craft your
                      international trip that suits your style. Our
                      international travel agent service providers are
                      well-experienced in crafting your trip plan, so don’t
                      worry about anything.
                    </p>

                    <h3 className="mt-4">
                      Do you want to explore India and know more about our
                      country and its culture? Capstone Holidays domestic travel
                      agent is here for you.
                    </h3>
                    <p>
                      India is famous for its rich culture and heritage. The
                      country has so many historical monuments with vibrant
                      festivals. Capstone Holidays is the most trustworthy
                      Domestic travel agent in Chennai. It has an extraordinary
                      plan to make you explore Indian regions. The agents
                      provide good services and hassle-free tours to make your
                      journey meaningful. Travel is the best way to rejuvenate
                      your soul, so stop thinking and make an extraordinary trip
                      with us.
                    </p>

                    <p>
                      The domestic travel agents from Capstone Holidays take you
                      to mesmerizing destinations found in India like Varanasi,
                      Rameswaram temple, Madurai Meenakshi Amman temple, etc. It
                      gives you wings to explore new venues. We also offer
                      exciting inclusions in our domestic travel packages like
                      food and accommodation, sightseeing entry tickets,
                      internal transfers, visa services, and so much more to
                      make your trip a memorable one.
                    </p>

                    <p>
                      <strong>Family – Friends Destinations:</strong> Capstone
                      Holidays domestic travel agent gives the perfect trip.
                    </p>

                    <p>
                      If you want to explore new destinations without any
                      stress, you have to choose the right domestic travel
                      agent. Capstone Holidays is well-experienced and has the
                      best travel agents in Chennai. We arrange trips for you in
                      a hassle-free manner, and for that, we have the best
                      travel agents in Chennai for you.
                    </p>

                    <p>
                      Capstone Holidays domestic travel agent will take care of
                      accommodation, food, travel facilities, and so on. We will
                      guide you and make your trip the best and most memorable
                      one. Capstone travel agents will connect with your vibe
                      and make you feel comfortable. Choose our local travel
                      agent services! Memorable destinations are waiting for
                      you! The best travel agents in Chennai at Capstone
                      Holidays will make your travel to top-notch destinations
                      and ensure your non-stop happiness.
                    </p>

                    <div className="share-links clearfix">
                      <div className="row justify-content-between">
                        <div className="col-md-auto">
                          <span className="share-links-title">Tags:</span>
                          <div className="tagcloud">
                            <a href="blog.html">Apartment</a>
                            <a href="blog.html">Buyer</a>
                            <a href="blog.html">Modern</a>
                            <a href="blog.html">Luxury</a>
                          </div>
                        </div>
                        <div className="col-md-auto text-xl-end">
                          <div className="share-links_wrapp">
                            <span className="share-links-title">Share:</span>
                            <div className="social-links">
                              <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                              <a href="https://www.twitter.com/">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram"></i>
                              </a>
                              <a href="https://www.linkedin.com/">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comments Section */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      image: blog2,
      author: "David Smith",
      date: "05 May, 2024",
      category: "Tour Guide",
      title:
        "Exploring The Green Spaces Of Realar Residence Harmony with Nature",
      content: (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-lg-11">
                <div className="th-blog blog-single">
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        <i className="fa-light fa-user"></i>by David Smith
                      </a>
                      <a href="blog.html">
                        <i className="fa-regular fa-calendar"></i>05 May, 2024
                      </a>
                      <a href="blog-details.html">
                        <img src="assets/img/icon/map.svg" alt="" />
                        Sea Beach
                      </a>
                    </div>
                    <h1 className="blog-title">
                      Best Time To Visit Kashmir – Plan A Trip To Kashmir With
                      Our Affordable Kashmir Tour Packages.
                    </h1>
                    <p>
                      Nestled elevated in the evergreen Himalayas, Kashmir is a
                      charming and captivating destination renowned worldwide
                      for its remarkable natural splendor. Its breathtaking
                      Mughal-era gardens, verdant valleys, shimmering lakes, and
                      majestic peaks have served as an inspiration to creative
                      writers for ages.
                    </p>

                    <blockquote>
                      <p>
                        <p>
                          It’s good to promise earlier in this blog that our
                          Kashmir Tour Packages, Kashmir family tour packages,
                          and Kashmir tour packages from Chennai enable you to
                          step into Kashmir effortlessly.
                        </p>
                      </p>
                    </blockquote>

                    <div className="row gy-4">
                      <div className="col-12">
                        <div className="blog-img">
                          <img className="w-100" src={blog1} alt="Blog Image" />
                        </div>
                      </div>
                    </div>
                    <p>
                      The vast majority usually opt to get ready their gear and
                      fly above this white carpet tourist attraction with a well
                      affordable Kashmir Tour Packages, since it is the world’s
                      most breathtaking location. However, some people are still
                      curious to know about the Kashmir family tour packages and
                      Kashmir honeymoon packages to travel to Kashmir. That
                      being said, it is usually wise to research a place’s
                      geography, climate, cheap flights, travel agencies, and
                      Kashmir trip package before visiting.
                    </p>

                    <p>
                      Jammu Kashmir is an evergreen place for global tourism
                      because this serene and nature-gifted spot is enlightened
                      in all four seasons.
                    </p>

                    <p>
                      Contact Capstone Holidays for the best Kashmir tour
                      packages from Chennai and customizable Kashmir Tour
                      Packages, Jammu Kashmir Tour Package, Kashmir tour
                      packages for family with flight, and Kashmir group tour
                      packages. Our Team is always delighted to help you.
                    </p>

                    <h1 className="blog-title">How is Summer in Kashmir?</h1>

                    <p>
                      Our Kashmir trip packages make no difference as to why you
                      want to travel to Kashmir with the best and cheapest
                      flights. But if you’re just hitched and thinking about
                      taking a romantic honeymoon (check our Kashmir honeymoon
                      package and Kashmir honeymoon packages from Chennai),
                      summer is the perfect time to visit Kashmir.
                    </p>

                    <p>
                      In Kashmir, June through August is considered summer. The
                      majority of people schedule their trips to this state with
                      a comfortable Kashmir Trip Package this season, which is
                      widely acclaimed as being like heaven on earth. Although
                      summers have occasionally been known to be extremely warm
                      as well, temperatures typically range from 13 to 30
                      degrees Celsius.
                    </p>

                    <p>
                      While accommodation rates may increase in the summer, the
                      weather is pleasant and a Shikhara ride on the stunning
                      Dal Lake in Srinagar is an absolute must-do. The summer is
                      the ideal time to visit Srinagar with our customizable
                      Srinagar Tour Packages since it allows you to see the
                      locals’ way of life. While traversing the Dal, the
                      Shikhara ride makes a halt at one of the numerous floating
                      businesses where you may purchase hot kava to warm your
                      inside.
                    </p>

                    <p>
                      Another popular accommodation option is the vintage
                      houseboats, which are moored on the lake and provide a
                      charming glimpse into Kashmiri culture. Visit Pahalgam and
                      Sonmarg in Jammu and Kashmir anytime with our reasonably
                      priced Kashmir holiday packages, Jammu Kashmir Tour
                      Package, and Kashmir Trip Package.
                    </p>

                    <p>
                      Witness these gorgeous landscapes along with your family
                      with our safety-protected Kashmir family tour packages,
                      Kashmir tour packages for family with flights, and
                      Srinagar Tour Packages.
                    </p>

                    <h1 className="blog-title">How is Autumn in Kashmir?</h1>

                    <p>
                      Enjoy Kashmir’s captivating beauty in the fall, namely in
                      September and October with our fascinating Kashmir trip
                      package. This is the time of year when the renowned Chinar
                      trees in Kashmir turn various shades of honey. The ground
                      is covered in carpets of beautiful reddish-yellow leaves
                      that trees are abundant with.
                    </p>

                    <p>
                      The Jammu Kashmir Travel and Tourism Board protects and
                      maintains Srinagar and its neighboring regions, such as
                      Dachigam, which are so breathtakingly gorgeous and make
                      you feel this may be the ideal time to visit Jammu and
                      Kashmir. Book our Kashmir tour packages and contact our
                      Kashmir tour operator at Capstone Holidays to learn more
                      fascinating features about the Kashmir Trip Package, and
                      Jammu Kashmir Tour Package.
                    </p>

                    <h1 className="blog-title">
                      How is the Monsoon in Kashmir?
                    </h1>

                    <p>
                      In Kashmir, the monsoons are regarded by most as the
                      off-season. The benefit is that you will save money
                      because there are frequently excellent discounts on hotels
                      and tours. It may get a little too cold during the monsoon
                      season, which runs from September to November, so pack
                      plenty of cozy clothes, completely waterproof rain
                      clothing, and an umbrella.
                    </p>

                    <p>
                      But don’t let the weather depress you. Even in these
                      months, there may be very little rainfall in some areas of
                      Kashmir, making for nice weather. If you’re lucky, you
                      could additionally be fortunate to enjoy apple-picking as
                      well, as now is the greatest time to do it. The Jammu
                      Kashmir Travel and Tourism Board and our Kashmir tour
                      operator protect your safety and well-being throughout the
                      trip in all seasons.
                    </p>

                    <p>
                      Impressed? Isn’t that so? To experience all these scenic
                      places with unforgettable memories, contact our Kashmir
                      tour operator at Capstone Holidays. A detailed review of
                      the Kashmir tour package rate, Kashmir honeymoon packages
                      from Chennai, Kashmir tour packages from Chennai, and
                      Kashmir holiday packages will be assisted for free.
                    </p>

                    <h1 className="blog-title">
                      How is Kashmir during Winter?
                    </h1>

                    <p>
                      This is the highest season in Kashmir for snowfall when
                      winters begin. It can get as low as 0 °C in November and
                      December. Winter, though, may be the perfect season to
                      visit Kashmir if you want to see snowfall for a reason.
                      December marks the beginning of the lovely snowfall, which
                      lasts until March. The entire valley remains covered in a
                      cool blanket of white snow and the Jammu Kashmir Travel
                      and Tourism Board makes it a treat for those who love this
                      natural occurrence.
                    </p>

                    <p>
                      The winter capital will make your soul rhythm to its chill
                      tune. Get ready for a lot of snow while exploring Sonmarg,
                      Gulmarg, or Srinagar. Enjoy this romantic bliss with your
                      partner by booking our affordable Kashmir Tour Packages,
                      Srinagar Tour Packages, Jammu Kashmir Tour Package, and
                      Kashmir honeymoon package. Our Kashmir tour packages from
                      Chennai and Kashmir tour packages for family with flight
                      provide you with all the ideal amenities to visit Kashmir
                      during the snowfall if you enjoy the cold and scraping
                      over the snow in shoes.
                    </p>

                    <h1 className="blog-title">Winding Up</h1>

                    <p>
                      Kashmir has long been a well-liked vacation spot for
                      families and newlyweds. Its attraction is increased by the
                      fact that multiple films from Bollywood have been filmed
                      here. Those seeking adventure can enjoy endless skiing and
                      snowboarding opportunities, not to mention the
                      breathtaking views from cable car trips. You are
                      surrounded by white snow, and in locations like Gulmarg,
                      the ocean of white is much more apparent.
                    </p>

                    <p>
                      Kashmir, rightly named “Paradise on Earth” gives you a
                      feel as if you are somewhere in heaven. Concluding this
                      blog by promising that any time is an ideal time to visit
                      Kashmir with our ideal Kashmir family Tour Packages and
                      Srinagar Tour Packages.
                    </p>

                    <p>
                      Contact our travel operator at Capstone Holidays Tours and
                      Travels to get to know more about cheap flights, the best
                      holiday packages, Kashmir family tour Package, Kashmir
                      tour packages from Chennai, and fascinating Kashmir tour
                      package rates.
                    </p>

                    <div className="share-links clearfix">
                      <div className="row justify-content-between">
                        <div className="col-md-auto">
                          <span className="share-links-title">Tags:</span>
                          <div className="tagcloud">
                            <a href="blog.html">Apartment</a>
                            <a href="blog.html">Buyer</a>
                            <a href="blog.html">Modern</a>
                            <a href="blog.html">Luxury</a>
                          </div>
                        </div>
                        <div className="col-md-auto text-xl-end">
                          <div className="share-links_wrapp">
                            <span className="share-links-title">Share:</span>
                            <div className="social-links">
                              <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                              <a href="https://www.twitter.com/">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram"></i>
                              </a>
                              <a href="https://www.linkedin.com/">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comments Section */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      image: blog3,
      author: "Blog",
      date: "September 14, 2024",
      category: "Tour Guide",
      title: "Best Tours And Travels in Chennai",
      content: (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-lg-11">
                <div className="th-blog blog-single">
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        <i className="fa-light fa-user"></i>Blog Details
                      </a>
                      <a href="blog.html">
     September 14, 2024,
      <i className="fa-regular fa-calendar"></i>
                      </a>
                      <a href="blog-details.html">
                        <img src="assets/img/icon/map.svg" alt="" />
                      Chennai Tours
                      </a>
                    </div>
                    <h1 className="blog-title">
                    Enjoy a Marvelous Trip with our Capstone Holidays – The Best Tours and Travels in Chennai
                    </h1>
                    <p>The best tours and travels in Chennai i.e., Capstone Holidays make your trip easy and smooth because the whole journey for you is planned by our service providers.</p>
                  
                    <blockquote>
                      <p>
                        <p>
                        Capstone Holidays with a high number of valuable customers is prominently loved and trusted by all age groups customers for our perfect travel destinations, which are suitable for friends tours, family trips, group tours, devotional tours, and corporate tours.
                        </p>
                      </p>
                    </blockquote>

                    <div className="row gy-4">
                      <div className="col-12">
                        <div className="blog-img">
                          <img className="w-100" src={blog1} alt="Blog Image" />
                        </div>
                      </div>
                    </div>
                    <p>So, our customers can feel free about the trip and enjoy all the things that come next. The most important reason why Capstone Tours and Travels seem to be the best tours and travel in Chennai is that the tour package has so many exciting and interesting inclusions like food and accommodation, sightseeing entry tickets, internal transfer, visa service, etc.</p>

<p>We treat our customers with sincerity and total care, which is the reason why Capstone Holidays is visited by many who trust our tour and travel agency in planning their vacation.</p>

<p>The best tours and travels in Chennai, i.e., Capstone Holidays, strive to give innovative and best tour packages that every customer loves to visit at least once in their lifetime.</p>

<p>We are proud to say that we have 4 locations in Chennai (tours and travels in Velachery, tours and travels in Perungudi, tours and travels in Madipakkam, and tours and travels in Tharamani). So, now you can reach our tours and travels in Chennai easily and plan for an awesome trip that makes your vacation a memorable one.</p>

<p>The best tours and travels in Chennai are definitely Capstone Holidays because our transparency and treating customers with care make them approach us easily without any hesitation. The next reason why Capstone Tours and Travels is loved by so many people is because we have links with high-class resort destinations and top-rated restaurants all over the world.</p>

<p>Capstone Holidays, the best tours and travels in Chennai, strives to make arrangements and take you to top-notch destinations all over the world with our attractive tour packages and innovative travel ideas.</p>


                    <h1 className="blog-title">What are the high-class destinations offered in Capstone Holidays tour packages?</h1>

                    <p>With our tour packages, you can visit Domestic and International destinations that stand epic in their culture and lifestyle. The best tours and travels in Chennai, i.e., Capstone Holidays, make a trip to the hotspot sites inside our beautiful country India, and we also offer tremendous locations inside Tamil Nadu which can also be visited through our domestic tour pack. The locations inside Tamil Nadu which speak history for generations are Mahabalipuram Palace, Madurai Meenakshi Amman temple, Tanjore Temple, Rameswaram Temple, Kanyakumari Beach, etc. These majestic spots can also be visited through our domestic tour packages offered by our best tours and travels in Chennai.</p>

<p>With our International travel packages, you can visit numerous destinations like Malaysia and Singapore, Vietnam, Thailand, Bali island in Indonesia, Dubai, and so on. The travel destinations which are preferred by the best tours and travels in Chennai, i.e., Capstone Holidays, are unique and innovative with interesting sightseeing. With our tour packages, you can know other country’s cultures and traditions to a great extent. It is very important to mention that our tours and travels agency has affordable travel packages and also elite travel packages. So, the thing is everyone is open to visiting us before planning for a trip.</p>


                    <h1 className="blog-title">Tours and travels in Velachery</h1>

                    <p>Our tour and travel agency in Velachery provides high-quality travel services and makes sure that customers feel comfortable with us. It mainly focuses on making a trip where you can find the most liked resort destinations around the globe. The service providers of Capstone Holidays assure customers of a hassle-free journey from beginning to end. Our tours and travels agency in Velachery primarily functions to make a trip to well-to-do spots where your dreams become a reality. Capstone Holidays, the best tours and travels in Chennai, also offers its customers a complete and full-filled journey experience. So, break the wait and visit us now on our best tours and travels in Chennai (Velachery) and explore the majestic locations worldwide.</p>


                    <h1 className="blog-title">
                    Tours and travels in Perungudi
                    </h1>

                    <p>
                    <p>On the other hand, the tour and travel agency in Perungudi functions to bring happiness in the face of customers by making a trip to the southern parts of India like <strong>Goa</strong>, Hyderabad,<strong>Munnar</strong> , Kanyakumari, Ooty, Kochi, Coorg, including so many hill stations that suit all age groups. The best tours and travels agency in Perungudi have valuable customers for their way of treating them with great care. Your safety is our priority, and your happiness is our motto. So, reach out to us at Capstone Holidays, which is the best tours and travels company in Perungudi and the best tours and travels in Chennai (Perungudi), and visit your dream destinations at an affordable price.</p>

                    </p>

                  

                    <h1 className="blog-title">
                    Tours and travels in Madipakkam
                    </h1>

                    <p>If you are a person who is fond of visiting pilgrimage spots, then visit us at Capstone Holidays, the best tours and travels agency in Madipakkam, where the devotional trip takes the front seat. The pilgrimage spots all over the world are covered in our best tours and travels company in Madipakkam. Our best tours and travels in Chennai offer devotional trips to places like Kanchipuram, Mahabalipuram, Tanjore, Rameswaram, and Madurai, where the architectural beauty and the sculptures present in the temples speak a lot about our culture and artistry.</p>

<p>The historical beauty present in these spots enlightens you and gives you peace of mind for sure. It is believed that the holy water in Rameswaram takes away your sins and purifies the soul. The Mahabalipuram Palace gives a wow experience and stuns you with its awesome architectural style.</p>

<p>On the other hand, the Meenakshi Amman temple is phenomenal and attracts each and every tourist with its stunning sculptures and beautiful statues. So, with our tour and travel agency in Madipakkam, our customers just get a wow feeling by visiting the spiritual destinations.</p>


                    <h1 className="blog-title">Tours and travels in Tharamani</h1>

                    <p>By the way, the tours and travels agency in Tharamani work hard for planning trips to international destinations like Vietnam, Thailand, Malaysia, Singapore, Dubai, etc., where your ideal spots highlight the list. Capstone Holidays, which is the best tours and travels in Tharamani and the best tours and travels in Chennai, gives a refreshing and tremendous trip experience across the globe. The tour packages consist of inclusions that assure your safe and hassle-free journey experience. With our packages, you can experience a very different and special journey, where you can showcase other country’s cultures and traditions.</p>

<p>This makes you feel that you are in another world, and the things happening near you feel like a dream come true. The tour and travel agency in Tharamani provide the best services through our experienced service providers. We are also bound to build healthy relationships with customers and know the ultimate goal of your travel. With the tours and travels in Tharamani, you could also plan for a budget-friendly and elite trip where you could have an extremely comfortable stay along the journey.</p>

<p>The destinations that are included in our best tours and travels in Chennai travel packages suit both middle-class and elite people, which inspires our customers in every way.</p>

<h1 className="blog-title">In what ways, Capstone Holidays tours and travels in Chennai stay special from other travel agencies?</h1>
<ul style={{listStyle:"disc"}}>
    <li>Transparency to customers and care are our specialty</li>
    <li>Exciting inclusions in the travel itinerary</li>
    <li>Promotes a hassle-free journey</li>
    <li>Safety is our motto</li>
    <li>Experienced travel guide</li>
    <li>Flexible payment structure</li>
    <li>Innovative travel packages</li>
</ul>
<br></br>
<p>The best tours and travels in Chennai i.e., Capstone Holidays follow international standards and top-notch customer services. Through our tour packages, our customers can have a comfortable stay at hi-fi resorts which have all kinds of arrangements in them. We believe that our innovative thinking in choosing travel destinations, and transparency in dealing with customers are the main reasons why customers choose us again and again. You can experience both budget-friendly trips and luxury trips according to your preference.</p>

<p>Apart from all this, the best tours and travels in Chennai, Capstone Holidays provides passport and visa services as exclusive inclusions which ease the trip in every manner. Also, we can handle every customer’s demand and can work hard to make their trip successful. Whenever one plans for a trip, one looks for a safe journey throughout and a journey that could be remembered for a lifetime. In that way, Capstone Holidays provides a holistic trip and also a comfortable trip, where customers need not worry about the planning and execution of it.</p>

<p>The travel package in our best tours and travels in Chennai is unique; you could plan for a honeymoon trip with your loved ones, a family trip, or a friend’s tour where you could create extremely enjoyable moments as a team. The destinations in our travel package are decided according to the nature of the trip and according to your privacy. When it comes to honeymoon trips, the most visited photo spots, waterfalls, and beautiful parks where you could get perfect clicks are given preference.</p>

<p>When it is a family trip, the places that have numerous full activities, thrilling rides, and water sports are given preference. And, in the case of friends' trips, pubs, party halls, and trekking sites are mostly preferred. That is why our best tours and travels in Chennai suit all age groups of customers from children to adults.</p>

<p>The happiness you want and you are longing for comes only when your mind feels free and when you are in a peaceful state. So, to get through all your hardships, traveling is the best medicine and our Capstone tours and travels package gives it in high dosage.</p>

<p>To visit your dream spot without any hesitation or doubt, reach out to us now for our best tours and travels in Chennai tour packages and visit the tremendous destinations that suit your budget and expectations.</p>




                    <div className="share-links clearfix">
                      <div className="row justify-content-between">
                        <div className="col-md-auto">
                          <span className="share-links-title">Tags:</span>
                          <div className="tagcloud">
                            <a href="blog.html">Apartment</a>
                            <a href="blog.html">Buyer</a>
                            <a href="blog.html">Modern</a>
                            <a href="blog.html">Luxury</a>
                          </div>
                        </div>
                        <div className="col-md-auto text-xl-end">
                          <div className="share-links_wrapp">
                            <span className="share-links-title">Share:</span>
                            <div className="social-links">
                              <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                              <a href="https://www.twitter.com/">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram"></i>
                              </a>
                              <a href="https://www.linkedin.com/">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comments Section */}
               
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <>
      {/* Full-width image section */}
      <div
        className="blog-header"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="overlay">
          <div className="container">
            <h1 className="blog-title">{blog.title}</h1>
            <p className="blog-meta">
              By {blog.author} on {blog.date} | Category: {blog.category}
            </p>
          </div>
        </div>
      </div>

      {/* Blog content section */}
      <section className="blog-content-section-new">
        <div className="container-fluid">
          <div className="blog-content">
            <p>{blog.content}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
