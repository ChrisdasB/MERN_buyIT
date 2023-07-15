const items = [
    {
        brandName: "ACME Technologies",
        itemName: "SuperSpeed PC",
        imageLink: "./assets/images/imagePc1.jpg",
        descriptionHeader: "Lightning-fast computing for unparalleled performance.",
        description: "Experience lightning-fast computing with the SuperSpeed PC from ACME Technologies. Powered by the latest generation processors and cutting-edge technology, this PC delivers unparalleled speed and performance for all your computing needs. Whether you're a gamer, content creator, or professional, the SuperSpeed PC handles resource-intensive tasks effortlessly, providing a seamless and responsive user experience. With its sleek design and powerful internals, it's time to take your computing to new heights with the SuperSpeed PC.",
        price: 2499.99,
        category: "pc",
        specs: {
          CPU: "ACME TurboCore X9",
          GPU: "ACME GeForce RX 8000",
          RAM: "32GB DDR5",
          Storage: "1TB NVMe SSD"
        }
      },
      {
        brandName: "TechMaster",
        itemName: "Ultimate Gaming Rig",
        imageLink: "./assets/images/imagePc2.jpg",
        descriptionHeader: "Uncompromising performance for ultimate gaming.",
        description: "Enter the realm of ultimate gaming with the TechMaster Ultimate Gaming Rig. Designed for the most demanding gamers, this PC delivers uncompromising performance and breathtaking visuals. With a combination of high-end components and advanced cooling systems, the Ultimate Gaming Rig ensures smooth gameplay even in the most graphically intensive titles. Immerse yourself in a world of unparalleled gaming experiences, where every detail comes to life. Take your gaming to the next level with the TechMaster Ultimate Gaming Rig and dominate the virtual battlefield with ease.",
        price: 3499.99,
        category: "pc",
        specs: {
          CPU: "TechMaster UltraCore Z10",
          GPU: "TechMaster Radeon RX 9000",
          RAM: "64GB DDR6",
          Storage: "2TB NVMe SSD"
        }
      },
      {
        brandName: "MaxCompute",
        itemName: "Pro Workstation",
        imageLink: "./assets/images/imagePc3.jpg",
        descriptionHeader: "Unleash your professional potential with power.",
        description: "Unlock your professional potential with the MaxCompute Pro Workstation. Engineered for power and productivity, this workstation is a force to be reckoned with. Featuring high-performance components and advanced multi-threading capabilities, it tackles resource-intensive tasks such as video editing, 3D rendering, and data analysis with ease. The Pro Workstation offers a seamless workflow, enabling you to handle complex projects efficiently. With its robust build quality and reliable performance, the MaxCompute Pro Workstation empowers professionals to push their boundaries and achieve exceptional results.",
        price: 1999.99,
        category: "pc",
        specs: {
          CPU: "MaxCompute Xeon Pro",
          GPU: "MaxCompute Quadro P5000",
          RAM: "128GB ECC DDR4",
          Storage: "1TB NVMe SSD + 4TB HDD"
        }
      },
      {
        brandName: "TechLinx",
        itemName: "Silent Performance PC",
        imageLink: "./assets/images/imagePc4.jpg",
        descriptionHeader: "Silent performance for distraction-free computing.",
        description: "Experience the power of silence with the TechLinx Silent Performance PC. Built with advanced noise-canceling technology and ultra-quiet cooling systems, this PC operates in near silence while delivering outstanding performance. Whether you're a content creator, gamer, or professional, the Silent Performance PC ensures a distraction-free environment without compromising on power. With its sleek and minimalist design, it seamlessly blends into any workspace or gaming setup. Upgrade to a new level of tranquility and performance with the TechLinx Silent Performance PC.",
        price: 1799.99,
        category: "pc",
        specs: {
          CPU: "TechLinx WhisperCore i7",
          GPU: "TechLinx SilentGTX 2000",
          RAM: "16GB DDR4",
          Storage: "512GB NVMe SSD"
        }
      },
      {
        brandName: "MegaByte",
        itemName: "Extreme Overclocked PC",
        imageLink: "./assets/images/imagePc5.jpg",
        descriptionHeader: "Unleash extreme power with overclocked performance.",
        description: "Unleash extreme power with the MegaByte Extreme Overclocked PC. Engineered for maximum performance, this PC is equipped with top-of-the-line components and an advanced liquid cooling system to push the boundaries of overclocking. Whether you're an overclocking enthusiast or a professional requiring lightning-fast processing, the Extreme Overclocked PC delivers unrivaled speed and responsiveness. Dominate the competition, render projects in record time, and experience seamless multitasking with this powerhouse. Elevate your computing experience with the MegaByte Extreme Overclocked PC.",
        price: 3999.99,
        category: "pc",
        specs: {
          CPU: "MegaByte TurboBoost X",
          GPU: "MegaByte OverclockedRTX 5000",
          RAM: "64GB DDR4",
          Storage: "2TB NVMe SSD + 4TB HDD"
        }
      },
      {
        brandName: "TechGenius",
        itemName: "Compact Mini PC",
        imageLink: "./assets/images/imagePc6.jpg",
        descriptionHeader: "Powerful computing in a compact form factor.",
        description: "Experience powerful computing in a compact form factor with the TechGenius Compact Mini PC. Ideal for space-constrained environments, this PC offers a small footprint without compromising on performance. Equipped with efficient processors and high-speed storage, it delivers smooth multitasking and fast boot times. Whether you need a home entertainment center or a portable workstation, the Compact Mini PC offers versatility and convenience. Enjoy a clutter-free setup without sacrificing functionality with the TechGenius Compact Mini PC.",
        price: 1199.99,
        category: "pc",
        specs: {
          CPU: "TechGenius NanoCore i5",
          GPU: "TechGenius MiniGTX 1000",
          RAM: "8GB DDR4",
          Storage: "256GB NVMe SSD"
        }
      },
      {
        brandName: "GigaSpeed",
        itemName: "Lightning Gaming System",
        imageLink: "./assets/images/imagePc7.jpg",
        descriptionHeader: "Unleash lightning-fast gaming performance.",
        description: "Unleash the power of lightning-fast gaming with the GigaSpeed Lightning Gaming System. Designed for gamers who demand the best, this PC offers exceptional graphics, high frame rates, and fluid gameplay. With its powerful components and advanced cooling systems, it ensures smooth performance even during intense gaming sessions. Immerse yourself in lifelike visuals, responsive controls, and immersive audio. Upgrade your gaming experience with the GigaSpeed Lightning Gaming System and leave your opponents in awe.",
        price: 2899.99,
        category: "pc",
        specs: {
          CPU: "GigaSpeed ThunderCore i9",
          GPU: "GigaSpeed ThunderBolt RTX 4000",
          RAM: "32GB DDR4",
          Storage: "1TB NVMe SSD + 2TB HDD"
        }
      },
      {
        brandName: "TechMakers",
        itemName: "All-in-One PC",
        imageLink: "./assets/images/imagePc8.jpg",
        descriptionHeader: "Simplified computing with an all-in-one solution.",
        description: "Simplify your workspace with the TechMakers All-in-One PC. Combining a sleek design with powerful performance, this PC integrates the monitor and components into a single unit, reducing clutter and providing a seamless user experience. Whether you need it for work, entertainment, or everyday tasks, the All-in-One PC offers convenience and functionality. Enjoy vibrant visuals, responsive touchscreens, and easy setup with this all-inclusive solution. Upgrade your workspace with the TechMakers All-in-One PC.",
        price: 1699.99,
        category: "pc",
        specs: {
          CPU: "TechMakers CoreX i7",
          GPU: "TechMakers Integrated Graphics",
          RAM: "16GB DDR4",
          Storage: "512GB NVMe SSD"
        }
      },
      {
        brandName: "UltraTech",
        itemName: "Multi-Monitor PC",
        imageLink: "./assets/images/imagePc9.jpg",
        descriptionHeader: "Enhanced productivity with multi-monitor support.",
        description: "Expand your horizons with the UltraTech Multi-Monitor PC. Designed for productivity and immersive experiences, this PC supports multiple monitors for enhanced multitasking, gaming, and content creation. With its powerful graphics capabilities and high-speed connectivity, it offers seamless transitions between screens and delivers exceptional visuals. Boost your productivity, create expansive gaming setups, or immerse yourself in a panoramic viewing experience with the UltraTech Multi-Monitor PC.",
        price: 2199.99,
        category: "pc",
        specs: {
          CPU: "UltraTech MultiCore i9",
          GPU: "UltraTech MultiScreen RTX 3000",
          RAM: "32GB DDR4",
          Storage: "1TB NVMe SSD + 2TB HDD"
        }
      },
      {
        brandName: "SwiftByte",
        itemName: "Compact Gaming PC",
        imageLink: "./assets/images/imagePc10.jpg",
        descriptionHeader: "Powerful gaming experiences in a compact package.",
        description: "Experience gaming on-the-go with the SwiftByte Compact Gaming PC. Designed for portability without sacrificing performance, this PC delivers powerful gaming experiences in a compact form factor. Equipped with high-performance components and efficient cooling systems, it handles demanding games with ease. Whether you're traveling, attending LAN parties, or looking for a space-saving solution, the Compact Gaming PC offers the perfect balance of power and portability. Elevate your gaming wherever you go with the SwiftByte Compact Gaming PC.",
        price: 1499.99,
        category: "pc",
        specs: {
          CPU: "SwiftByte MobileCore i7",
          GPU: "SwiftByte MobileGTX 2000",
          RAM: "16GB DDR4",
          Storage: "512GB NVMe SSD"
        }
      },
      {
        brandName: "TechVision",
        itemName: "Streaming & Content Creation PC",
        imageLink: "./assets/images/imagePc18.jpg",
        descriptionHeader: "Unleash your creativity with powerful streaming.",
        description: "Unleash your creativity and share your vision with the TechVision Streaming & Content Creation PC. Engineered for streamers, video editors, and content creators, this PC offers powerful processing, ample storage, and dedicated graphics capabilities. With its advanced capture and streaming features, it enables smooth and high-quality live streaming experiences. Edit videos, render projects, and produce professional content with ease. Unlock your full creative potential with the TechVision Streaming & Content Creation PC.",
        price: 2799.99,
        category: "pc",
        specs: {
          CPU: "TechVision StreamCore i9",
          GPU: "TechVision ContentCreator RTX 5000",
          RAM: "64GB DDR4",
          Storage: "2TB NVMe SSD + 4TB HDD"
        }
      },
      {
        brandName: "MegaByte",
        itemName: "Powerhouse Workstation",
        imageLink: "./assets/images/imagePc11.jpg",
        descriptionHeader: "Maximize productivity with a powerhouse workstation.",
        description: "Achieve unparalleled productivity with the MegaByte Powerhouse Workstation. Built to handle demanding workloads and complex tasks, this workstation offers exceptional processing power, extensive storage options, and professional-grade graphics. Whether you're a designer, engineer, or data analyst, the Powerhouse Workstation provides the performance and reliability you need to excel. From 3D modeling to scientific simulations, this workstation is your trusted partner in tackling challenging projects. Maximize your productivity with the MegaByte Powerhouse Workstation.",
        price: 3299.99,
        category: "pc",
        specs: {
          CPU: "MegaByte PowerXeon W",
          GPU: "MegaByte PowerQuadro RTX 6000",
          RAM: "128GB ECC DDR4",
          Storage: "2TB NVMe SSD + 8TB HDD"
        }
      },
      {
        brandName: "TechLinx",
        itemName: "Virtual Reality PC",
        imageLink: "./assets/images/imagePc12.jpg",
        descriptionHeader: "Step into the immersive world of virtual reality.",
        description: "Step into the immersive world of virtual reality with the TechLinx Virtual Reality PC. Designed to deliver exceptional VR experiences, this PC combines powerful components and advanced graphics to transport you to new dimensions. Explore virtual worlds, play immersive games, and engage in realistic simulations with smooth visuals and responsive controls. Whether you're a gamer, designer, or enthusiast, the Virtual Reality PC offers a gateway to limitless possibilities. Experience the future of computing with the TechLinx Virtual Reality PC.",
        price: 2399.99,
        category: "pc",
        specs: {
          CPU: "TechLinx VRCore i9",
          GPU: "TechLinx VR-Ready GTX 3000",
          RAM: "32GB DDR4",
          Storage: "1TB NVMe SSD + 2TB HDD"
        }
      },
      {
        brandName: "TechGenius",
        itemName: "Powerful Home PC",
        imageLink: "./assets/images/imagePc13.jpg",
        descriptionHeader: "Transform your home computing experience.",
        description: "Transform your home computing experience with the TechGenius Powerful Home PC. Whether you're working, studying, or enjoying multimedia entertainment, this PC offers the performance and versatility you need. From seamless multitasking to crisp visuals, it delivers a reliable and efficient user experience. With its modern design and easy connectivity, it seamlessly integrates into your home setup. Elevate your home computing with the TechGenius Powerful Home PC and enjoy a powerful yet user-friendly solution.",
        price: 1499.99,
        category: "pc",
        specs: {
          CPU: "TechGenius HomeCore i5",
          GPU: "TechGenius HomeGTX 1000",
          RAM: "16GB DDR4",
          Storage: "512GB NVMe SSD + 1TB HDD"
        }
      },
      {
        brandName: "GigaSpeed",
        itemName: "Liquid-Cooled Gaming System",
        imageLink: "./assets/images/imagePc14.jpg",
        descriptionHeader: "Immerse in gaming with liquid-cooled performance.",
        description: "Dive into the world of gaming with the GigaSpeed Liquid-Cooled Gaming System. Engineered for maximum performance and cooling, this PC features a liquid cooling system that keeps temperatures low even during intense gaming sessions. With its powerful components and customizable RGB lighting, it combines style with substance. Immerse yourself in high-quality graphics, smooth frame rates, and realistic gameplay. Unleash the power of liquid cooling with the GigaSpeed Liquid-Cooled Gaming System and experience gaming at its best.",
        price: 2799.99,
        category: "pc",
        specs: {
          CPU: "GigaSpeed LiquidCore i7",
          GPU: "GigaSpeed LiquidRTX 3000",
          RAM: "32GB DDR4",
          Storage: "1TB NVMe SSD + 2TB HDD"
        }
      },
      {
        brandName: "TechMakers",
        itemName: "Compact All-in-One PC",
        imageLink: "./assets/images/imagePc15.jpg",
        descriptionHeader: "Simplified computing with a compact all-in-one.",
        description: "Enjoy the best of both worlds with the TechMakers Compact All-in-One PC. Combining the power of a desktop PC and the convenience of an all-in-one, this compact PC offers a versatile and space-saving solution. Featuring a built-in display, powerful components, and user-friendly design, it enhances your computing experience without cluttering your workspace. Whether you need it for work, entertainment, or everyday tasks, the Compact All-in-One PC delivers seamless performance and functionality. Streamline your setup with the TechMakers Compact All-in-One PC.",
        price: 1899.99,
        category: "pc",
        specs: {
          CPU: "TechMakers CoreAIO i7",
          GPU: "TechMakers Integrated Graphics",
          RAM: "16GB DDR4",
          Storage: "512GB NVMe SSD"
        }
      },
      {
        brandName: "UltraTech",
        itemName: "Sleek Gaming PC",
        imageLink: "./assets/images/imagePc16.jpg",
        descriptionHeader: "Combine style and performance in a sleek package.",
        description: "Combine style and performance with the UltraTech Sleek Gaming PC. Designed with a sleek and modern aesthetic, this PC stands out while delivering powerful gaming experiences. Equipped with high-performance components and advanced cooling systems, it handles the latest games with ease. Immerse yourself in stunning visuals, responsive controls, and immersive audio. The Sleek Gaming PC is the perfect choice for gamers who demand both power and aesthetics. Level up your gaming setup with the UltraTech Sleek Gaming PC.",
        price: 2199.99,
        category: "pc",
        specs: {
          CPU: "UltraTech StyloCore i7",
          GPU: "UltraTech StyloGTX 2000",
          RAM: "32GB DDR4",
          Storage: "1TB NVMe SSD + 2TB HDD"
        }
      },
      {
        brandName: "ACME Technologies",
        itemName: "Performance Gaming PC",
        imageLink: "./assets/images/imagePc17.jpg",
        descriptionHeader: "Unleash gaming performance at its finest.",
        description: "Experience the pinnacle of gaming performance with the ACME Technologies Performance Gaming PC. Designed for hardcore gamers, this PC delivers unrivaled power, speed, and visuals to bring your gaming adventures to life. With its cutting-edge components and advanced cooling systems, it handles the most demanding games with ease. Immerse yourself in a world of realistic graphics, lightning-fast frame rates, and smooth gameplay. Unleash your gaming potential with the ACME Technologies Performance Gaming PC.",
        price: 2999.99,
        category: "pc",
        specs: {
          CPU: "ACME TurboBoost X9",
          GPU: "ACME GeForce RTX 9000",
          RAM: "64GB DDR5",
          Storage: "2TB NVMe SSD + 4TB HDD"
        }
      },
      {
        brandName: "TechBook",
        itemName: "UltraSlim Laptop",
        imageLink: "./assets/images/imageLaptop1.jpg",
        descriptionHeader: "Slim and lightweight for on-the-go productivity.",
        description: "Experience ultimate portability with the TechBook UltraSlim Laptop. Designed for professionals and students, this laptop combines sleek aesthetics with powerful performance. With its lightweight design and long-lasting battery, it's perfect for on-the-go productivity. Whether you're working, studying, or enjoying multimedia entertainment, the UltraSlim Laptop offers a seamless user experience. Stay connected, productive, and entertained wherever you are with the TechBook UltraSlim Laptop.",
        price: 1299.99,
        specs: {
          CPU: "TechBook Core i5",
          GPU: "Integrated Graphics",
          RAM: "8GB DDR4",
          Storage: "512GB SSD"
        },
        category: "laptop"
      },
      {
        brandName: "MegaSpeed",
        itemName: "Gaming Laptop",
        imageLink: "./assets/images/imageLaptop2.jpg",
        descriptionHeader: "Unleash gaming performance on the go.",
        description: "Take your gaming on the go with the MegaSpeed Gaming Laptop. Packed with high-performance components and dedicated graphics, it delivers desktop-level gaming experiences in a portable form factor. Whether you're playing the latest AAA titles or tackling demanding tasks, the Gaming Laptop offers smooth gameplay and exceptional visuals. With its ergonomic design and immersive audio, it's the perfect companion for gaming enthusiasts. Unleash your gaming potential with the MegaSpeed Gaming Laptop.",
        price: 1999.99,
        specs: {
          CPU: "MegaSpeed Core i7",
          GPU: "MegaSpeed GeForce RTX 3000",
          RAM: "16GB DDR4",
          Storage: "1TB SSD"
        },
        category: "laptop"
      },
      {
        brandName: "TechLinx",
        itemName: "Convertible Laptop",
        imageLink: "./assets/images/imageLaptop3.jpg",
        descriptionHeader: "Versatility and performance in one device.",
        description: "Experience the ultimate versatility with the TechLinx Convertible Laptop. This 2-in-1 device combines the power of a laptop with the flexibility of a tablet, allowing you to switch seamlessly between modes. Whether you're typing, drawing, or watching movies, the Convertible Laptop adapts to your needs. With its powerful hardware and high-resolution display, it offers exceptional performance and stunning visuals. Stay productive and entertained with the TechLinx Convertible Laptop.",
        price: 1499.99,
        specs: {
          CPU: "TechLinx Core i7",
          GPU: "Integrated Graphics",
          RAM: "16GB DDR4",
          Storage: "512GB SSD"
        },
        category: "laptop"
      },
      {
        brandName: "MaxCompute",
        itemName: "Workstation Laptop",
        imageLink: "./assets/images/imageLaptop4.jpg",
        descriptionHeader: "Power and performance for demanding tasks.",
        description: "Unleash your productivity with the MaxCompute Workstation Laptop. Designed for professionals and content creators, this laptop offers powerful performance and extensive storage options. With its high-resolution display and color accuracy, it's perfect for graphic design, video editing, and other demanding tasks. The Workstation Laptop delivers reliability and performance to handle even the most resource-intensive projects. Boost your productivity with the MaxCompute Workstation Laptop.",
        price: 2499.99,
        specs: {
          CPU: "MaxCompute Xeon",
          GPU: "MaxCompute Quadro RTX 4000",
          RAM: "32GB ECC DDR4",
          Storage: "1TB SSD + 2TB HDD"
        },
        category: "laptop"
      },
      {
        brandName: "TechGenius",
        itemName: "Powerful Business Laptop",
        imageLink: "./assets/images/imageLaptop5.jpg",
        descriptionHeader: "Performance and security for business professionals.",
        description: "Stay ahead in the business world with the TechGenius Powerful Business Laptop. Designed for professionals who demand both power and security, this laptop combines high-performance components with advanced security features. With its durable build, long battery life, and comprehensive connectivity options, it's the perfect companion for business travelers. The Powerful Business Laptop ensures productivity and peace of mind, allowing you to focus on your work without compromise.",
        price: 1799.99,
        specs: {
          CPU: "TechGenius Core i7",
          GPU: "Integrated Graphics",
          RAM: "16GB DDR4",
          Storage: "1TB SSD"
        },
        category: "laptop"
      },
      {
        brandName: "SwiftByte",
        itemName: "Budget-Friendly Laptop",
        imageLink: "./assets/images/imageLaptop6.jpg",
        descriptionHeader: "Affordable performance for everyday computing.",
        description: "Experience reliable performance without breaking the bank with the SwiftByte Budget-Friendly Laptop. Designed for everyday computing tasks, this laptop offers a balance of affordability and functionality. Whether you're browsing the web, working on documents, or enjoying multimedia content, it delivers smooth and responsive performance. With its compact design and long battery life, it's the ideal choice for students and casual users. Get the job done without compromising your budget with the SwiftByte Budget-Friendly Laptop.",
        price: 899.99,
        specs: {
          CPU: "SwiftByte Core i3",
          GPU: "Integrated Graphics",
          RAM: "8GB DDR4",
          Storage: "256GB SSD"
        },
        category: "laptop"
      },
      {
        brandName: "GigaSpeed",
        itemName: "High-Performance Laptop",
        imageLink: "./assets/images/imageLaptop7.jpg",
        descriptionHeader: "Uncompromising performance for power users.",
        description: "Experience unparalleled performance with the GigaSpeed High-Performance Laptop. Packed with cutting-edge hardware and powerful graphics, it handles resource-intensive tasks with ease. Whether you're editing videos, running virtual machines, or designing complex models, the High-Performance Laptop delivers exceptional speed and responsiveness. With its stunning display and immersive audio, it's the perfect choice for content creators and power users. Take your productivity to new heights with the GigaSpeed High-Performance Laptop.",
        price: 2799.99,
        specs: {
          CPU: "GigaSpeed Core i9",
          GPU: "GigaSpeed GeForce RTX 5000",
          RAM: "32GB DDR4",
          Storage: "1TB SSD + 2TB HDD"
        },
        category: "laptop"
      },
      {
        brandName: "TechMakers",
        itemName: "Multimedia Laptop",
        imageLink: "./assets/images/imageLaptop8.jpg",
        descriptionHeader: "Immerse in multimedia experiences on the go.",
        description: "Immerse yourself in multimedia experiences with the TechMakers Multimedia Laptop. Featuring a high-resolution display, powerful audio, and ample storage, it delivers a rich and immersive entertainment experience. Whether you're streaming movies, editing photos, or enjoying your favorite music, the Multimedia Laptop offers stunning visuals and crisp sound. With its portable design and long battery life, it's the perfect companion for entertainment enthusiasts. Elevate your multimedia experience with the TechMakers Multimedia Laptop.",
        price: 1499.99,
        specs: {
          CPU: "TechMakers Core i7",
          GPU: "Integrated Graphics",
          RAM: "16GB DDR4",
          Storage: "512GB SSD"
        },
        category: "laptop"
      },
      {
        brandName: "UltraTech",
        itemName: "Gaming & Design Laptop",
        imageLink: "./assets/images/imageLaptop9.jpg",
        descriptionHeader: "Powerful performance for gaming and design.",
        description: "Unleash your creativity and gaming prowess with the UltraTech Gaming & Design Laptop. Featuring high-performance components and dedicated graphics, it handles demanding games and resource-intensive design tasks with ease. With its high-refresh-rate display and color accuracy, it brings your visuals to life with stunning clarity. The Gaming & Design Laptop combines power, versatility, and style, making it the perfect choice for creative professionals and avid gamers.",
        price: 2199.99,
        specs: {
          CPU: "UltraTech Core i7",
          GPU: "UltraTech GeForce RTX 3000",
          RAM: "32GB DDR4",
          Storage: "1TB SSD"
        },
        category: "laptop"
      },
      {
        brandName: "TechLinx",
        itemName: "Budget Gaming Laptop",
        imageLink: "./assets/images/imageLaptop10.jpg",
        descriptionHeader: "Affordable gaming performance for casual gamers.",
        description: "Enter the world of gaming without breaking the bank with the TechLinx Budget Gaming Laptop. Designed for casual gamers, it offers a balance of affordability and gaming performance. With its dedicated graphics and responsive display, it handles popular games with ease. The Budget Gaming Laptop ensures smooth gameplay and immersive experiences without compromising your budget. Take your gaming to the next level without breaking the bank with the TechLinx Budget Gaming Laptop.",
        price: 1299.99,
        specs: {
          CPU: "TechLinx Core i5",
          GPU: "TechLinx GeForce GTX 1650",
          RAM: "8GB DDR4",
          Storage: "512GB SSD"
        },
        category: "laptop"
      },
      {
        brandName: "MegaByte",
        itemName: "High-End Workstation Laptop",
        imageLink: "./assets/images/imageLaptop11.jpg",
        descriptionHeader: "Maximize productivity with a high-end workstation.",
        description: "Maximize your productivity with the MegaByte High-End Workstation Laptop. Built for professionals who require uncompromising performance, this laptop offers powerful hardware and extensive storage options. From complex simulations to rendering projects, it delivers exceptional speed and efficiency. With its color-accurate display and comprehensive connectivity, it's the ultimate workstation on the go. Elevate your productivity with the MegaByte High-End Workstation Laptop.",
        price: 2999.99,
        specs: {
          CPU: "MegaByte Xeon",
          GPU: "MegaByte Quadro RTX 5000",
          RAM: "64GB DDR4",
          Storage: "1TB SSD + 2TB HDD"
        },
        category: "laptop"
      },
      {
        brandName: "TechVision",
        itemName: "Premium Ultrabook",
        imageLink: "./assets/images/imageLaptop12.jpg",
        descriptionHeader: "Sleek design and premium performance.",
        description: "Experience the perfect blend of style and performance with the TechVision Premium Ultrabook. Featuring a sleek and lightweight design, it's ideal for professionals on the move. With its powerful hardware and long battery life, it delivers exceptional performance and productivity. The Premium Ultrabook offers a stunning display, fast storage, and comprehensive connectivity options. Elevate your mobile computing experience with the TechVision Premium Ultrabook.",
        price: 1799.99,
        specs: {
          CPU: "TechVision Core i7",
          GPU: "Integrated Graphics",
          RAM: "16GB DDR4",
          Storage: "512GB SSD"
        },
        category: "laptop"
      },
      {
        brandName: "ACME Technologies",
        itemName: "Versatile Business Laptop",
        imageLink: "./assets/images/imageLaptop13.jpg",
        descriptionHeader: "Versatility and performance for business professionals.",
        description: "Stay productive and adaptable with the ACME Technologies Versatile Business Laptop. Designed for business professionals, it offers a perfect blend of performance and versatility. With its robust build, comprehensive security features, and long-lasting battery, it's the ideal choice for professionals on the move. The Versatile Business Laptop ensures a seamless workflow, allowing you to stay productive wherever you go. Elevate your business capabilities with the ACME Technologies Versatile Business Laptop.",
        price: 1899.99,
        specs: {
          CPU: "ACME Technologies Core i7",
          GPU: "Integrated Graphics",
          RAM: "16GB DDR4",
          Storage: "512GB SSD"
        },
        category: "laptop"
      },
      {
        brandName: "TechVision",
        itemName: "UltraWide Monitor",
        imageLink: "./assets/images/imageMonitor1.jpg",
        descriptionHeader: "Immersive viewing experience with UltraWide display.",
        description: "Experience the ultimate immersion with the TechVision UltraWide Monitor. Featuring a wide aspect ratio and stunning color reproduction, it brings your content to life with exceptional clarity. Whether you're working on detailed projects or enjoying multimedia entertainment, the UltraWide Monitor offers a spacious and immersive viewing experience. With its ergonomic design and versatile connectivity options, it's perfect for multitasking and enhancing productivity. Elevate your visual experience with the TechVision UltraWide Monitor.",
        price: 999.99,
        specs: {
          Resolution: "3440x1440",
          Size: 34,
          Hz: "75Hz",
          Panel: "IPS"
        },
        category: "monitor"
      },
      {
        brandName: "MegaView",
        itemName: "4K Gaming Monitor",
        imageLink: "./assets/images/imageMonitor2.jpg",
        descriptionHeader: "Immerse in gaming with stunning 4K resolution.",
        description: "Step into the world of gaming with the MegaView 4K Gaming Monitor. Boasting a high-resolution display and fast response time, it delivers a smooth and immersive gaming experience. The 4K resolution brings stunning detail and clarity to your games, while the high refresh rate ensures buttery-smooth gameplay. With its sleek design and customizable settings, the Gaming Monitor is a perfect choice for gaming enthusiasts. Unleash your gaming potential with the MegaView 4K Gaming Monitor.",
        price: 1299.99,
        specs: {
          Resolution: "3840x2160",
          Size: 27,
          Hz: "144Hz",
          Panel: "TN"
        },
        category: "monitor"
      },
      {
        brandName: "TechLinx",
        itemName: "Curved Monitor",
        imageLink: "./assets/images/imageMonitor3.jpg",
        descriptionHeader: "Immersive and comfortable viewing with a curved display.",
        description: "Experience a new level of immersion with the TechLinx Curved Monitor. The gently curved display wraps around your field of view, providing a more natural and immersive visual experience. Whether you're working on creative projects or watching movies, the Curved Monitor enhances your viewing comfort and engagement. With its vibrant colors and wide viewing angles, it delivers stunning visuals from any perspective. Elevate your viewing experience with the TechLinx Curved Monitor.",
        price: 799.99,
        specs: {
          Resolution: "2560x1440",
          Size: 32,
          Hz: "144Hz",
          Panel: "VA"
        },
        category: "monitor"
      },
      {
        brandName: "MaxView",
        itemName: "Professional Monitor",
        imageLink: "./assets/images/imageMonitor4.jpg",
        descriptionHeader: "Accurate colors and precise detail for professionals.",
        description: "Unleash your creativity with the MaxView Professional Monitor. Designed for professionals who demand color accuracy and precise detail, it delivers exceptional visual quality for graphic design, photo editing, and other professional tasks. With its high-resolution display and wide color gamut, it faithfully reproduces colors with stunning accuracy. The Professional Monitor offers a range of customization options to fine-tune your workflow. Take your professional work to the next level with the MaxView Professional Monitor.",
        price: 1499.99,
        specs: {
          Resolution: "3840x2160",
          Size: 27,
          Hz: "60Hz",
          Panel: "IPS"
        },
        category: "monitor"
      },
      {
        brandName: "TechGenius",
        itemName: "Gaming Monitor",
        imageLink: "./assets/images/imageMonitor5.jpg",
        descriptionHeader: "Smooth gameplay and responsive performance.",
        description: "Level up your gaming experience with the TechGenius Gaming Monitor. Featuring a high refresh rate and fast response time, it ensures smooth and fluid gameplay, free from motion blur and screen tearing. The Gaming Monitor's vibrant colors and sharp details bring your games to life, while the ergonomic design keeps you comfortable during extended gaming sessions. With its customizable settings and adaptive sync technology, it's the perfect choice for competitive gamers. Unleash your gaming prowess with the TechGenius Gaming Monitor.",
        price: 899.99,
        specs: {
          Resolution: "2560x1440",
          Size: 27,
          Hz: "165Hz",
          Panel: "IPS"
        },
        category: "monitor"
      },
      {
        brandName: "UltraVision",
        itemName: "QHD Monitor",
        imageLink: "./assets/images/imageMonitor6.jpg",
        descriptionHeader: "Crisp visuals and enhanced productivity.",
        description: "Immerse yourself in stunning visuals with the UltraVision QHD Monitor. With its Quad HD resolution, it delivers crisp and detailed images for work and entertainment. The QHD Monitor's ample screen real estate and precise color reproduction enhance your productivity and multimedia experiences. Whether you're editing photos, streaming videos, or working on spreadsheets, it offers a seamless and immersive visual experience. Elevate your productivity with the UltraVision QHD Monitor.",
        price: 699.99,
        specs: {
          Resolution: "2560x1440",
          Size: 24,
          Hz: "75Hz",
          Panel: "IPS"
        },
        category: "monitor"
      },
      {
        brandName: "ProView",
        itemName: "Professional-Grade Monitor",
        imageLink: "./assets/images/imageMonitor7.jpg",
        descriptionHeader: "Precise color accuracy and superior performance.",
        description: "Experience professional-grade performance with the ProView Monitor. Engineered for color-critical tasks, it offers exceptional color accuracy and precise image reproduction. Whether you're editing photos, working with CAD software, or doing color grading, the Professional-Grade Monitor ensures precise and consistent results. With its wide color gamut and hardware calibration support, it meets the demands of professional workflows. Elevate your work with the ProView Professional-Grade Monitor.",
        price: 1699.99,
        specs: {
          Resolution: "3840x2160",
          Size: 32,
          Hz: "60Hz",
          Panel: "IPS"
        },
        category: "monitor"
      },
      {
        brandName: "TechLinx",
        itemName: "Portable Monitor",
        imageLink: "./assets/images/imageMonitor8.jpg",
        descriptionHeader: "Productivity on the go with a portable display.",
        description: "Enhance your productivity while on the move with the TechLinx Portable Monitor. Featuring a slim and lightweight design, it's the perfect companion for professionals and travelers. The Portable Monitor easily connects to your laptop or smartphone, giving you an additional screen for multitasking or presentations. With its Full HD resolution and versatile connectivity options, it offers a convenient and efficient workspace wherever you are. Stay productive on the go with the TechLinx Portable Monitor.",
        price: 399.99,
        specs: {
          Resolution: "1920x1080",
          Size: 15.6,
          Hz: "60Hz",
          Panel: "IPS"
        },
        category: "monitor"
      },
      {
        brandName: "GigaScreen",
        itemName: "Large-Sized Monitor",
        imageLink: "./assets/images/imageMonitor9.jpg",
        descriptionHeader: "Expansive screen for immersive visual experiences.",
        description: "Immerse yourself in expansive visuals with the GigaScreen Large-Sized Monitor. With its generous screen size and high-resolution display, it offers an immersive and engaging viewing experience. Whether you're watching movies, playing games, or working on large-scale projects, the Large-Sized Monitor provides ample space and crisp details. With its sleek design and comprehensive connectivity options, it's the perfect choice for multimedia enthusiasts and professionals seeking a spacious workspace. Elevate your visual experiences with the GigaScreen Large-Sized Monitor.",
        price: 1499.99,
        specs: {
          Resolution: "3840x2160",
          Size: 43,
          Hz: "60Hz",
          Panel: "VA"
        },
        category: "monitor"
      },
      {
        brandName: "MaxView",
        itemName: "UHD Monitor",
        imageLink: "./assets/images/imageMonitor10.jpg",
        descriptionHeader: "Immersive visuals with Ultra HD resolution.",
        description: "Immerse yourself in stunning visuals with the MaxView UHD Monitor. With its Ultra HD resolution, it delivers sharp details and vibrant colors, bringing your content to life. Whether you're editing photos, watching movies, or gaming, the UHD Monitor provides a visually captivating experience. The sleek design and slim bezels enhance the aesthetics of your workspace. Elevate your visual entertainment with the MaxView UHD Monitor.",
        price: 1099.99,
        specs: {
          Resolution: "3840x2160",
          Size: 28,
          Hz: "60Hz",
          Panel: "IPS"
        },
        category: "monitor"
      },{
        brandName: "TechPlus",
        itemName: "Gaming Curved Monitor",
        imageLink: "./assets/images/imageMonitor11.jpg",
        descriptionHeader: "Immersive gaming experience with a curved display.",
        description: "Dive into the world of gaming with the TechPlus Gaming Curved Monitor. The curved display wraps around your field of view, providing a more immersive and engaging gaming experience. With its high refresh rate and fast response time, it ensures smooth gameplay with minimal motion blur. The Gaming Curved Monitor's vibrant colors and wide viewing angles enhance your gaming visuals, while the ergonomic design keeps you comfortable during extended gaming sessions. Elevate your gaming performance with the TechPlus Gaming Curved Monitor.",
        price: 1199.99,
        specs: {
          resolution: "2560x1440",
          size: 32,
          refreshRate: "165Hz",
          panel: "VA"
        },
        category: "monitor"
      },
      {
        brandName: "UltraVision",
        itemName: "Portable Gaming Monitor",
        imageLink: "./assets/images/imageMonitor12.jpg",
        descriptionHeader: "Gaming on the go with a portable display.",
        description: "Experience gaming on the go with the UltraVision Portable Gaming Monitor. Featuring a compact and portable design, it easily connects to your gaming console or laptop, giving you a high-quality display wherever you are. With its high refresh rate and quick response time, it ensures smooth and responsive gameplay. The Portable Gaming Monitor's slim profile and built-in speakers make it the perfect choice for gamers on the move. Take your gaming adventures anywhere with the UltraVision Portable Gaming Monitor.",
        price: 599.99,
        specs: {
          resolution: "1920x1080",
          size: 15.6,
          refreshRate: "144Hz",
          panel: "IPS"
        },
        category: "monitor"
      },
      {
        brandName: "TechPro",
        itemName: "Professional Studio Monitor",
        imageLink: "./assets/images/imageMonitor13.jpg",
        descriptionHeader: "Color-accurate display for professional studio work.",
        description: "Achieve precise color accuracy and detail with the TechPro Professional Studio Monitor. Designed for photographers, graphic designers, and video editors, it offers exceptional color reproduction and image clarity. The Professional Studio Monitor's wide color gamut and hardware calibration support ensure accurate and consistent results for your studio work. With its high-resolution display and ergonomic stand, it provides a comfortable and efficient workflow. Elevate your studio work with the TechPro Professional Studio Monitor.",
        price: 1799.99,
        specs: {
          resolution: "3840x2160",
          size: 27,
          refreshRate: "60Hz",
          panel: "IPS"
        },
        category: "monitor"
      },
      {
        brandName: "GigaView",
        itemName: "Ultra-Slim Monitor",
        imageLink: "./assets/images/imageMonitor14.jpg",
        descriptionHeader: "Sleek and slim design for a modern workspace.",
        description: "Upgrade your workspace aesthetics with the GigaView Ultra-Slim Monitor. With its ultra-slim profile and minimal bezels, it adds a touch of elegance to your desk. The Ultra-Slim Monitor's high-resolution display and wide viewing angles provide crisp visuals from any perspective. Whether you're working on creative projects or enjoying multimedia content, it offers a seamless and immersive visual experience. Enhance your workspace with the GigaView Ultra-Slim Monitor.",
        price: 899.99,
        specs: {
          resolution: "2560x1440",
          size: 27,
          refreshRate: "75Hz",
          panel: "IPS"
        },
        category: "monitor"
      },
      {
        brandName: "MaxLinx",
        itemName: "Affordable Monitor",
        imageLink: "./assets/images/imageMonitor15.jpg",
        descriptionHeader: "Affordable performance for everyday computing.",
        description: "Enjoy reliable performance without breaking the bank with the MaxLinx Affordable Monitor. Designed for everyday computing tasks, it offers a balance of affordability and functionality. Whether you're browsing the web, working on documents, or enjoying multimedia content, the Affordable Monitor delivers a crisp and vibrant display. With its slim bezels and adjustable stand, it fits seamlessly into any workspace. Get the job done without compromising your budget with the MaxLinx Affordable Monitor.",
        price: 399.99,
        specs: {
          resolution: "1920x1080",
          size: 23.8,
          refreshRate: "60Hz",
          panel: "IPS"
        },
        category: "monitor"
      },{
        brandName: "TechPro",
        itemName: "Wireless Mouse",
        imageLink: "./assets/images/imagePeripheral1.jpg",
        descriptionHeader: "Ergonomic Wireless Mouse with Precision Control",
        description:
          "Experience smooth and accurate cursor control with our ergonomic wireless mouse. Its sleek design fits comfortably in your hand, reducing wrist strain during long hours of use. The advanced optical sensor ensures precise tracking on any surface. Say goodbye to tangled wires and enjoy the freedom of wireless connectivity.",
        price: 29.99,
        category: "peripheral",
        specs: {
          Connectivity: "2.4GHz wireless",
          DPI: "1200",
          BatteryLife: "Up to 12 months",
          Compatibility: "Windows and Mac",
        },
      },
      {
        brandName: "AudioTech",
        itemName: "Over-Ear Headphones",
        imageLink: "./assets/images/imagePeripheral2.jpg",
        descriptionHeader: "Immerse Yourself in Rich Audio with Over-Ear Headphones",
        description:
          "Enjoy exceptional sound quality and comfort with our over-ear headphones. Featuring premium drivers and noise-canceling technology, they deliver immersive audio and block out unwanted background noise. The cushioned ear cups and adjustable headband provide a snug fit for extended listening sessions. Whether you're gaming, working, or simply relaxing, these headphones will elevate your audio experience.",
        price: 79.99,
        category: "peripheral",
        specs: {
          DriverSize: "40mm",
          FrequencyResponse: "20Hz - 20kHz",
          Impedance: "32 Ohms",
          CableLength: "1.2m",
        },
      },
      {
        brandName: "GamingGear",
        itemName: "Mechanical Gaming Keyboard",
        imageLink: "./assets/images/imagePeripheral3.jpg",
        descriptionHeader: "Enhance Your Gaming Performance with Mechanical Keyboard",
        description:
          "Get the competitive edge with our mechanical gaming keyboard. Its responsive mechanical switches provide lightning-fast keystrokes, perfect for intense gaming sessions. With customizable RGB backlighting and programmable macros, you can personalize your setup and streamline your gameplay. The durable construction ensures long-lasting performance, while the ergonomic design keeps you comfortable even during marathon gaming sessions.",
        price: 129.99,
        category: "peripheral",
        specs: {
          SwitchType: "Cherry MX Red",
          Backlighting: "RGB",
          AntiGhosting: "Full-key rollover",
          MacroKeys: "5 programmable macro keys",
        },
      },
      {
        brandName: "AudioTech",
        itemName: "Wireless Gaming Headset",
        imageLink: "./assets/images/imagePeripheral4.jpg",
        descriptionHeader: "Immersive Gaming Experience with Wireless Headset",
        description:
          "Immerse yourself in the game with our wireless gaming headset. Featuring high-quality audio drivers and surround sound technology, it delivers immersive and accurate sound for an enhanced gaming experience. The adjustable headband and cushioned ear cups provide a comfortable fit, while the wireless connectivity allows freedom of movement. Communicate with your teammates clearly using the built-in microphone.",
        price: 99.99,
        category: "peripheral",
        specs: {
          Connectivity: "2.4GHz wireless",
          BatteryLife: "Up to 10 hours",
          Compatibility: "PC, PlayStation, Xbox",
          SurroundSound: "Virtual 7.1 surround sound",
        },
      },
      {
        brandName: "TechPro",
        itemName: "Gaming Mouse",
        imageLink: "./assets/images/imagePeripheral5.jpg",
        descriptionHeader: "Enhance Your Gaming Performance with Gaming Mouse",
        description:
          "Take your gaming performance to the next level with our gaming mouse. It features high-precision sensors and customizable DPI settings, allowing for precise and accurate cursor control. The ergonomic design with programmable buttons ensures comfortable and convenient gaming sessions. The customizable RGB lighting adds a touch of style to your setup. Dominate the game with this reliable and responsive gaming mouse.",
        price: 59.99,
        category: "peripheral",
        specs: {
          DPI: "Up to 12,000",
          ProgrammableButtons: "6 programmable buttons",
          Connectivity: "Wired USB",
          Lighting: "RGB lighting",
        },
      },
      {
        brandName: "SoundMaster",
        itemName: "Noise-Canceling Headphones",
        imageLink: "./assets/images/imagePeripheral6.jpg",
        descriptionHeader: "Immerse Yourself in Music with Noise-Canceling Headphones",
        description:
          "Escape into your own world of music with our noise-canceling headphones. The active noise-canceling technology blocks out unwanted background noise, allowing you to focus on your music. The comfortable over-ear design and cushioned ear cups provide long-lasting comfort. With Bluetooth connectivity, you can enjoy wireless freedom and convenience. Experience immersive audio with crystal-clear sound quality.",
        price: 149.99,
        category: "peripheral",
        specs: {
          NoiseCancellation: "Active noise cancellation",
          Bluetooth: "Bluetooth 5.0",
          BatteryLife: "Up to 20 hours",
          FrequencyResponse: "20Hz - 20kHz",
        },
      },
      {
        brandName: "GamingGear",
        itemName: "Mechanical Gaming Keyboard",
        imageLink: "./assets/images/imagePeripheral7.jpg",
        descriptionHeader: "Enhance Your Gaming Experience with Mechanical Keyboard",
        description:
          "Take your gaming to the next level with our mechanical gaming keyboard. The responsive mechanical switches provide tactile feedback and faster key actuation for precise and rapid keystrokes. The customizable RGB lighting allows you to create a personalized gaming setup. With its durable construction and ergonomic design, this keyboard is built to withstand intense gaming sessions.",
        price: 129.99,
        category: "peripheral",
        specs: {
          SwitchType: "Mechanical switches",
          Backlighting: "RGB backlighting",
          AntiGhosting: "Full-key rollover",
          MacroKeys: "Programmable macro keys",
        },
      },
      {
        brandName: "TechPro",
        itemName: "Wireless Ergonomic Mouse",
        imageLink: "./assets/images/imagePeripheral8.jpg",
        descriptionHeader: "Effortless and Comfortable Navigation with Wireless Mouse",
        description:
          "Navigate your computer with ease and comfort using our wireless ergonomic mouse. The ergonomic design reduces strain on your hand and wrist, allowing for long hours of use without discomfort. The advanced optical sensor ensures precise tracking on various surfaces. With wireless connectivity, you can enjoy freedom of movement and a clutter-free workspace.",
        price: 39.99,
        category: "peripheral",
        specs: {
          Connectivity: "2.4GHz wireless",
          DPI: "Up to 1600",
          BatteryLife: "Up to 12 months",
          Compatibility: "Windows, Mac, Linux",
        },
      },
      {
        brandName: "AudioTech",
        itemName: "Bluetooth Headphones",
        imageLink: "./assets/images/imagePeripheral9.jpg",
        descriptionHeader: "Wireless Audio Freedom with Bluetooth Headphones",
        description:
          "Experience wireless audio freedom with our Bluetooth headphones. Enjoy your favorite music without the hassle of tangled wires. The lightweight and foldable design make them portable and easy to carry. With built-in controls and a long battery life, you can enjoy music and take calls on the go. Immerse yourself in high-quality sound wherever you are.",
        price: 79.99,
        category: "peripheral",
        specs: {
          Connectivity: "Bluetooth 5.0",
          BatteryLife: "Up to 20 hours",
          FoldableDesign: "Easy portability",
          Controls: "Built-in controls",
        },
      },
      {
        brandName: "TechPro",
        itemName: "Mechanical Gaming Keyboard",
        imageLink: "./assets/images/imagePeripheral10.jpg",
        descriptionHeader: "Optimize Your Gaming Performance with Mechanical Keyboard",
        description:
          "Unlock your gaming potential with our mechanical gaming keyboard. The high-performance mechanical switches provide rapid response and precise key actuation, giving you a competitive edge. The customizable RGB lighting allows you to personalize your gaming setup, and the durable construction ensures long-lasting reliability. Elevate your gaming experience with this feature-packed keyboard.",
        price: 139.99,
        category: "peripheral",
        specs: {
          SwitchType: "Mechanical switches",
          Backlighting: "RGB backlighting",
          AntiGhosting: "Full-key rollover",
          MacroKeys: "Programmable macro keys",
        },
      },
      {
        brandName: "GamingGear",
        itemName: "Wired Gaming Mouse",
        imageLink: "./assets/images/imagePeripheral11.jpg",
        descriptionHeader: "Enhance Your Gaming Precision with Wired Gaming Mouse",
        description:
          "Achieve superior gaming precision with our wired gaming mouse. The high-precision optical sensor and adjustable DPI settings allow for precise cursor control. The ergonomic design and customizable buttons ensure comfort and convenience during long gaming sessions. With its durable construction and reliable performance, this mouse is perfect for both casual and competitive gaming.",
        price: 49.99,
        category: "peripheral",
        specs: {
          DPI: "Up to 10,000",
          ProgrammableButtons: "6 programmable buttons",
          Connectivity: "Wired USB",
          ErgonomicDesign: "Comfortable grip",
        },
      },
      {
        brandName: "TechPro",
        itemName: "Antivirus Software",
        imageLink: "./assets/images/imageSoftware1.png",
        descriptionHeader: "Protect Your Device with Antivirus Software",
        description:
          "Ensure the security of your device with our advanced antivirus software. It offers real-time protection against viruses, malware, and other online threats. With regular updates and robust scanning capabilities, it keeps your data and personal information safe. Enjoy peace of mind knowing that your device is protected with our reliable and effective antivirus software.",
        price: 49.99,
        category: "software",
        specs: {
          Platform: "Windows, Mac, Android",
          SubscriptionDuration: "1 year",
          Features: "Real-time scanning, Firewall protection, Email protection",
          SupportedLanguages: "Multiple languages",
        },
      },
      {
        brandName: "DesignMaster",
        itemName: "Graphic Design Software",
        imageLink: "./assets/images/imageSoftware1.png",
        descriptionHeader: "Unleash Your Creativity with Graphic Design Software",
        description:
          "Create stunning graphics and designs with our professional graphic design software. Packed with powerful tools and intuitive features, it enables you to bring your creative visions to life. From logos and illustrations to brochures and web designs, this software empowers designers of all levels. Elevate your design skills and unlock your artistic potential with our comprehensive graphic design software.",
        price: 199.99,
        category: "software",
        specs: {
          Platform: "Windows, Mac",
          SubscriptionDuration: "Lifetime license",
          Features: "Layer-based editing, Vector graphics, Typography tools",
          SupportedFileFormats: "AI, PSD, SVG, EPS, PDF",
        },
      },
      {
        brandName: "CodeGenius",
        itemName: "Integrated Development Environment (IDE)",
        imageLink: "./assets/images/imageSoftware1.png",
        descriptionHeader: "Streamline Your Coding Workflow with IDE",
        description:
          "Boost your coding productivity and efficiency with our powerful integrated development environment (IDE). It provides a comprehensive set of tools and features for software development, including code editing, debugging, and version control. With support for multiple programming languages, this IDE is suitable for developers of various specialties. Take your coding skills to the next level with our advanced IDE.",
        price: 79.99,
        category: "software",
        specs: {
          Platform: "Windows, Mac, Linux",
          SubscriptionDuration: "1 year",
          Features: "Code autocompletion, Debugger, Version control integration",
          SupportedLanguages: "C, C++, Java, Python, JavaScript, and more",
        },
      },
      {
        brandName: "FinanceMaster",
        itemName: "Accounting Software",
        imageLink: "./assets/images/imageSoftware1.png",
        descriptionHeader: "Manage Your Finances Effectively with Accounting Software",
        description:
          "Simplify your financial management and streamline your bookkeeping with our accounting software. It offers powerful features for invoicing, expense tracking, and financial reporting. From small businesses to large enterprises, this software is designed to meet your accounting needs. Stay organized, save time, and make informed financial decisions with our reliable accounting software.",
        price: 129.99,
        category: "software",
        specs: {
          Platform: "Windows, Mac",
          SubscriptionDuration: "1 year",
          Features: "Invoicing, Expense tracking, Financial reporting",
          SupportedCurrencies: "Multiple currencies",
        },
      },
      {
        brandName: "PhotoEditPro",
        itemName: "Photo Editing Software",
        imageLink: "./assets/images/imageSoftware1.png",
        descriptionHeader: "Enhance Your Photos with Photo Editing Software",
        description:
          "Transform your photos into stunning works of art with our professional photo editing software. It provides a wide range of editing tools and effects to enhance colors, remove imperfections, and add creative touches to your images. From basic adjustments to advanced retouching, this software empowers photographers and enthusiasts alike. Unlock the full potential of your photos with our feature-rich photo editing software.",
        price: 79.99,
        category: "software",
        specs: {
          Platform: "Windows, Mac",
          SubscriptionDuration: "Lifetime license",
          Features: "Crop, Resize, Filters, Layers, Retouching",
          SupportedFileFormats: "JPEG, PNG, TIFF, RAW",
        },
      },
  ];

  export default items;