import React from "react";
import {
  Anchor,
  Badge,
  Breadcrumbs,
  Button,
  Menu,
  NavLink,
  Navbar,
  Paper,
  ScrollArea,
  Stepper,
  Text,
} from "@mantine/core";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "../../node_modules/react-icons/fa";

import ApexCharts from "react-apexcharts";
import { useState } from "react";


// import { Chart } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   LinearScale,
//   CategoryScale,
//   PointElement,
//   plugins,
//   scales,
// } from "chart.js";

// ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement);
const Profile = () => {
  const [active, setActive] = useState(1);
  const items = [
    { title: "Mantine", href: "#" },
    { title: "Mantine hooks", href: "#" },
    { title: "use-id", href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  // const chartData = {
  //   labels: ["Jan", "Feb", "Marc", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  //   datasets: [
  //     {
  //       label: "Products",
  //       data: [30, 41, 35, 56, 49, 62, 69, 91, 100],
  //       //   transform:"translate(0, 0)",
  //       backgroundColor: "transparent",
  //       borderColor: "rgb(77, 83, 224)",
  //       pointBoderColor: "transparent",
  //       pointBoderWidth: 4,
  //       tension: 0.5,
  //     },
  //     {
  //       label: "Services",
  //       data: [64, 53, 47, 39, 24, 36, 42, 55, 67],
  //       //   transform:"translate(0, 0)",
  //       backgroundColor: "transparent",
  //       borderColor: "rgb(65, 213, 226)",
  //       pointBoderColor: "transparent",
  //       pointBoderWidth: 4,
  //       tension: 0.5,
  //     },
  //   ],
  // };

  // const options = {
  //   maintainAspectRatio: false,
  //   interaction: {
  //     mode: "index",
  //     interset: false,
  //     axis: "x",
  //   },
  //   plugins: {
  //     tooltips: {
  //       enabled: true,
  //     },
  //   },
  //   scales: {
  //     y: {
  //       min: 0,
  //       max: 120,
  //       ticks: {
  //         stopSize: 2,
  //       },
  //       grid: {
  //         drawOnChartArea: false,
  //         drawBorder: false,
  //         borderDash: [40],
  //       },
  //     },
  //     x: {
  //       grid: {
  //         drawBorder: false,
  //         borderDash: [6],
  //         border: false,
  //       },
  //       ticks: {
  //         // font:{
  //         //   size:'16px'
  //         // }
  //       },
  //     },
  //   },
  // };
  const series = [
    {
      name: "Products",
      data: [30, 41, 35, 56, 49, 62, 69, 91, 100],
    },
    {
      name: "Services",
      data: [64, 53, 47, 39, 24, 36, 42, 55, 67],
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Marc", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      // labels: {
      //   style: {
      //     colors: "#6B859E",
      //     opacity: 0.7,
      //   },
      // },
    },
    yaxis: {
      // labels: {
      //   style: {
      //     colors: ["#6B859E"],
      //     opacity: 0.7,
      //   },
      // },
    },
    tooltip: {
      x: {
        show: false,
      },
    },
    // fill: {
    //   type: "gradient",
    //   gradient: {
    //     shadeIntensity: 1,
    //     opacityFrom: 0.7,
    //     opacityTo: 1,
    //     stops: [40, 90, 100],
    //   },
    // },
    colors: ["#4D53E0", "#41D5E2"],
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
      horizontalAlign: "center",
    },
  };

  return (
    <>
      <div className=" flex columns-2">
        <div className=" w-[20%]"></div>
        <div className=" w-[80%]">
          <div className="">
            <h2 className=" text-lg font-semibold text-gray-600">Profile</h2>
            <Breadcrumbs>{items}</Breadcrumbs>
          </div>
          <div className=" ">
            <div className=" grid gap-7 lg:grid-cols-2 md:grid-cols-1 m-7">
              <div className="lg:w-full md:w-full sm:w-full bg-color text-white p-5">
                <div className=" ">
                  <section className="">
                    <div className="">
                      <div className="flex justify-end">
                        
                        <Menu shadow="md" width={100}>
                          <Menu.Target>
                          <a
                            aria-haspopup="true"
                            href="#"
                            className="p-0 nav-link"
                            aria-expanded="false"
                          >
                            <img
                              src="https://demo.flatlogic.com/sofia-react/static/media/moreIcon.f4169ba0.svg"
                              alt="More..."
                            />
                          </a>
                          </Menu.Target>

                          <Menu.Dropdown className=" rounded">
                            <Menu.Item>Edit</Menu.Item>
                            <Menu.Item>Delete</Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </div>
                      <div className=" flex justify-center items-center">
                        <img
                          className=" w-[190px] h-[190px] mr-4"
                          src="	https://demo.flatlogic.com/sofia-react/static/media/profile.97b5b6a7.png"
                          alt="..."
                        />
                        <div className=" flex flex-col">
                          <p className=" text-3xl font-bold mb-2">Mary </p>
                          <span className=" text-3xl font-bold mb-2">Sanders</span>
                          <p className=" mb-5">UI/UX Designer</p>
                          <hr className=" mb-5"/>
                          <div className="flex flex-row ">
                            <a
                            className=" mr-10 text-xl"
                              href="https://www.facebook.com/flatlogic"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i>
                                <FaFacebookF />
                              </i>
                            </a>
                            <a
                            className=" mr-10 text-xl"
                              href="https://twitter.com/flatlogic/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i>
                                <FaTwitter />
                              </i>
                            </a>
                            <a
                            className=" mr-10 text-xl"
                              href="https://github.com/flatlogic/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i >
                                <FaGithub />
                              </i>
                            </a>
                            <a
                            className=" text-xl"
                              href="https://www.linkedin.com/company/flatlogic/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i>
                                <FaLinkedinIn />
                              </i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-10">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's typesetting industry. Lorem Ipsum has been
                        the industry's
                      </div>
                      <div className=" mt-6 flex justify-between flex-wrap">
                        <span className="">
                          <Badge className=" text-blue-600">Figma</Badge>
                        </span>
                        <span>
                          <Badge className=" text-red-600">Marketing</Badge>
                        </span>
                        <span className="">
                          <Badge className=" text-yellow-500">Digital Marketing</Badge>
                        </span>
                        <span className="">
                          <Badge className=" text-cyan-500">Graphic Design</Badge>
                        </span>
                        <span className="">
                          <Badge className=" text-emerald-500">Social Media</Badge>
                        </span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <Navbar className=" lg:w-full md:w-full sm:w-full" height={500} p="md" width={{ base: 500 }}>
                <Navbar.Section mt="md" mb="md">
                  <div className="">
                    <h2 className=" text-lg font-semibold">Earning</h2>
                    <a className=" text-base ">
                      BBC News, Euronews, CNN, GB News
                    </a>
                  </div>
                </Navbar.Section>

                <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
                  <div className="flex flex-row m-4 mb-6">
                    <div className="" id="0">
                      <img
                        className="w-[70px] h-[70px]"
                        src="https://demo.flatlogic.com/sofia-react/static/media/bbcnewsLogo.ce86c07c.svg"
                        alt="avatar pic"
                      />
                    </div>
                    <div className="ml-5">
                      <div className=" flex">
                        <p className="font-semibold mr-3">BBC News</p>
                        <p className=" text-gray-500 font-medium">15 min ago</p>
                      </div>
                      <div className=" text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's typesetting industry. Lorem Ipsum has...
                        <span className="fake-link"> view all</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row m-4 mb-6">
                    <div className="" id="0">
                      <img
                        className="w-[70px] h-[70px]"
                        src="https://demo.flatlogic.com/sofia-react/static/media/cnnLogo.920ed1f4.svg"
                        alt="avatar pic"
                      />
                    </div>
                    <div className="ml-5">
                      <div className=" flex">
                      <p className="font-semibold mr-3">BBC News</p>
                        <p className=" text-gray-500 font-medium">15 min ago</p>
                      </div>
                      <div className=" text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's typesetting industry. Lorem Ipsum has...
                        <span className="fake-link"> view all</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row m-4 mb-6">
                    <div className="" id="0">
                      <img
                        className="w-[70px] h-[70px]"
                        src="https://demo.flatlogic.com/sofia-react/static/media/euronewsLogo.e04390d9.svg"
                        alt="avatar pic"
                      />
                    </div>
                    <div className="ml-5">
                      <div className=" flex">
                      <p className="font-semibold mr-3">BBC News</p>
                        <p className=" text-gray-500 font-medium">15 min ago</p>
                      </div>
                      <div className=" text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's typesetting industry. Lorem Ipsum has...
                        <span className="fake-link"> view all</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row m-4 mb-6">
                    <div className="" id="0">
                      <img
                        className="w-[70px] h-[70px]"
                        src="https://demo.flatlogic.com/sofia-react/static/media/nbcLogo.120e3953.svg"
                        alt="avatar pic"
                      />
                    </div>
                    <div className="ml-5">
                      <div className=" flex">
                      <p className="font-semibold mr-3">BBC News</p>
                        <p className=" text-gray-500 font-medium">15 min ago</p>
                      </div>
                      <div className=" text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's typesetting industry. Lorem Ipsum has...
                        <span className="fake-link"> view all</span>
                      </div>
                    </div>
                  </div>
                 
                </Navbar.Section>

                <Navbar.Section>{/* Footer with Profile */}</Navbar.Section>
              </Navbar>
            </div>
          </div>
          <div className=" grid gap-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 m-7">
            <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-7">
              <Paper shadow="xs" p="md" className=" md:w-[100%] sm:w-[100%]">
              <Stepper
                className=""
                active={active}
                onStepClick={setActive}
                orientation="vertical"
              >
                <Stepper.Step label="Step 1" description="Verify email" />
                <Stepper.Step label="Step 2" description="Verify email" />
                <Stepper.Step label="Step 3" description="Get full access" />
                <Stepper.Step label="Step 4" description="Get full access" />
                <Stepper.Step label="Step 5" description="Get full access" />
                <Stepper.Step label="Step 6" description="Get full access" />
              </Stepper>
              </Paper>
              <div>
                <div className="w-full flex flex-col">
                  <Paper className=" mb-6" shadow="xs" p="md">
                    <section className=" ">
                      <div className="">
                        <div className="flex flex-col items-center ">
                          <img
                            className=""
                            src="https://demo.flatlogic.com/sofia-react/static/media/heartRed.616f373a.svg"
                            alt="..."
                          />
                          <div className=" my-3 font-semibold">Paypal</div>
                          <div className=" text-gray-500 text-sm font-semibold">+$2000</div>
                        </div>
                      </div>
                    </section>
                  </Paper>

                  <Paper className=" mb-6" shadow="xs" p="md">
                    <section className="">
                      <div className=" ">
                        <div className=" flex flex-col items-center">
                          <img
                            className="img-fluid mb-1"
                            src="https://demo.flatlogic.com/sofia-react/static/media/heartTeal.932b16dd.svg"
                            alt="..."
                          />
                          <div className="my-3 font-semibold">Paypal</div>
                          <div className="text-gray-500 text-sm font-semibold">+$2000</div>
                        </div>
                      </div>
                    </section>
                  </Paper>
                  <Paper className="" shadow="xs" p="md">
                    <section className="">
                      <div className="">
                        <div className="flex flex-col items-center">
                          <div className=" text-3xl text-red-400 font-semibold">
                            +$467,80
                          </div>
                          <div className=" text-gray-500 text-base">Your total earning</div>
                          <button className=" rounded-full bg-color px-5 py-2 border-none text-white text-sm font-semibold">
                            Get Money
                          </button>
                        </div>
                      </div>
                    </section>
                  </Paper>
                </div>
              </div>
            </div>
            <div className=" flex w-full flex-col">
              <div
                className=" w-[100%] h-[250px]"
                style={{ minHeight: "265px" }}
              >
                {/* <Chart type="line" data={chartData} options={options} /> */}
                <ApexCharts
                  options={options}
                  series={series}
                  type="line"
                  height={300}
                />
              </div>

              <div className=" mt-20">
                <Paper shadow="xs" p="lg">
                  <div className="">
                    <p className=" text-xl font-semibold text-gray-700">My Friends</p>
                    <div className="flex justify-between">
                      <div>
                        <div className="flex pt-4">
                          <div
                            className="avatar ml-4"
                            id="Alisha_Swan"
                          >
                            <img
                              className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                              src="https://demo.flatlogic.com/sofia-react/static/media/AlishaSwan.d4871f39.png"
                              alt="avatar pic"
                            />
                          </div>
                          <div
                            className="avatar"
                            id="James_Wood"
                          >
                            <img
                              className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                              src="https://demo.flatlogic.com/sofia-react/static/media/JamesWood.e99c32e2.png"
                              alt="avatar pic"
                            />
                          </div>
                          <div
                            className="avatar"
                            id="Luis_Suares"
                          >
                            <img
                              className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                              src="https://demo.flatlogic.com/sofia-react/static/media/LuisSuares.e3fb1c91.png"
                              alt="avatar pic"
                            />
                          </div>
                          <div
                            className="avatar"
                            id="Samantha_Bird"
                          >
                            <img
                              className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                              src="	https://demo.flatlogic.com/sofia-react/static/media/SamanthaBird.45a73a86.png"
                              alt="avatar pic"
                            />
                          </div>
                          <div
                            className="avatar"
                            id="Tara_Smith"
                          >
                            <img
                              className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                              src="https://demo.flatlogic.com/sofia-react/static/media/TaraSmith.122797b5.png"
                              alt="avatar pic"
                            />
                          </div>
                          <div
                            className="avatar"
                            id="Brandy_Martins"
                          >
                            <img
                              className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                              src="	https://demo.flatlogic.com/sofia-react/static/media/BrandyMartins.3e3760ad.png"
                              alt="avatar pic"
                            />
                          </div>
                          <div
                            className="avatar"
                            id="Enzo_Macaroni"
                          >
                            <img
                              className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                              src="	https://demo.flatlogic.com/sofia-react/static/media/EnzoMacaroni.feacca8e.png"
                              alt="avatar pic"
                            />
                          </div>
                          <div
                            className="avatar"
                            id="Jenny_Lim"
                          >
                            <img
                              className=" hover:scale-[1.1] transition ease-in-out delay-100 duration-200"
                              src="	https://demo.flatlogic.com/sofia-react/static/media/JennyLim.cae24865.png"
                              alt="avatar pic"
                            />
                          </div>
                          
                        </div>
                      </div>
                      <div className="flex flex-col item-center">
                        <p className="">283 Friends</p>
                        <button className=" text-xs rounded-full outline-offset-8">
                          + Add new friend
                        </button>
                      </div>
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
