window.PORTFOLIO_DATA = {

  site: {
    title: "Karim Mahdi — Robotics Software Developer",
    description:
      "Staff software Developer with 6+ years in robotics, building the full " +
      "autonomy stack — perception, localization, calibration, navigation, and fleet " +
      "coordination — for autonomous mobile robots.",
    url: "https://karimm3334.github.io",
  },

  person: {
    name: "Karim Mahdi",
    title: "Staff Robotics Software Developer — Autonomy, Perception & Navigation",
    tagline:
      "I build the software that makes autonomous mobile robots work in the " +
      "real world, around real people.",
    availability: "Based in Yerevan, Armenia · Open to relocation",
    bio:
      "6+ years building the full autonomy stack — perception, localization, " +
      "calibration, navigation, and fleet coordination — " +
      "for fleets of autonomous warehouse forklift robots.\n\n" +
      "I specialize in designing and developing robotic software solutions, " +
      "delivering innovative, large-scale system applications.",
    resumeUrl: "",
  },

  links: {
    email: "karimm3334@gmail.com",
    github: "https://github.com/karimm3334",
    linkedin: "https://www.linkedin.com/in/karimm3334",
  },

  experience: [
    {
      company: "Automacon",
      role: "Staff Software Developer",
      type: "Full-time · Remote",
      period: "Aug 2020 – Present",
      location: "Moscow, Russia",
      website: "https://automacon.ru/agv/",
      logo: "assets/icons/automacon.svg",
      duration: "6 years",
      summary:
        "Autonomous warehouse forklift robots — owned the software end to end, " +
        "from perception algorithms through fleet-scale deployment. Joined at the " +
        "earliest stage (a 2-robot fleet) and helped grow the platform to 200+ " +
        "robots across 10 warehouses of major clients in Russia.",
      highlights: [
        "Built pallet detection and localization resilient to broken, foil-wrapped, and occluded pallets — enabling dependable autonomous pick and cutting pick error rates from 20% to 0.3%.",
        "Built a self-calibrating 6-sensor suite (2× 3D LiDAR, 2× 2D LiDAR, 2× depth cameras) — fully automatic calibration that aligns every sensor with no manual tuning, cutting per-unit calibration effort from 6 hours to 5 minutes.",
        "Designed predictive fleet traffic control — centralized, real-time path de-confliction that forecasts each robot's trajectory, reducing congestion across a fleet of 68 robots.",
        "Created a declarative multi-variant build system — two spec files auto-generate the Dockerfile and all ROS launch files for 8 robot variants, on an 8-stage GitLab CI pipeline with reproducible, versioned builds, significantly speeding up fleet updates and releases.",
      ],
    },
    {
      company: "Nest3D",
      role: "Senior Software Developer",
      type: "Contract · Remote",
      period: "Nov 2025 – Present",
      location: "Lisbon, Portugal",
      website: "https://www.nest3d.ai/",
      logo: "assets/icons/nest3d.svg",
      duration: "9 months",
      summary:
        "3D reconstruction from multi-million-point LiDAR scans — build software " +
        "that turns raw scans into accurate, CAD/BIM-ready 3D geometry for " +
        "as-built and digital-twin workflows.",
      highlights: [
        "Built an automated curb & sidewalk tracer — extracts clean 3D polylines from raw urban point clouds via local 'density-ridge walking', staying robust to clutter (parked cars, trees, weathered curbs) with live feedback and editable cross-section templates.",
        "Built one-click building reconstruction — click a surface and it detects the plane, fits the axis, and extrudes a full 3D wall with thickness and height, mitering adjacent walls seamlessly in an interactive visualization window.",
        "Design and build end-to-end reconstruction tooling — point-cloud processing, geometric feature extraction, surface/edge detection, polyline tracing, and CAD/BIM interoperability.",
        "Build 3D reconstruction pipelines — surface and plane fitting, axis estimation, and parametric geometry generation with automatic joint and topology merging.",
      ],
    },
  ],

  skills: [
    {
      group: "Languages",
      items: ["C++", "Python", "Bash"],
    },
    {
      group: "Robotics & Systems",
      items: ["ROS 1", "ROS 2", "Docker", "Git", "Linux"],
    },
    {
      group: "Perception & Point Cloud",
      items: ["PCL", "OpenCV", "Open3D", "OpenVINO", "PyTorch", "TensorFlow", "ffmpeg"],
    },
    {
      group: "Simulation & Visualization",
      items: ["Gazebo", "RViz", "Matplotlib", "NetworkX"],
    },
    {
      group: "Math & Performance",
      items: ["Eigen", "NumPy", "SciPy", "Cython", "cProfile"],
    },
  ],

  education: [
    {
      school: "Leibniz University Hannover",
      credential: "B.Sc. Mechatronics",
      period: "Oct 2022 – Apr 2025",
      location: "Germany",
      note: "",
      status: "Studies not completed",
    },
    {
      school: "Technical University of Dortmund",
      credential: "B.Sc. Mechanical Engineering",
      period: "Oct 2021 – Sep 2022",
      location: "Germany",
      note: "1st place, metal-forming competition.",
      status: "Studies not completed",
    },
    {
      school: "École Élissa",
      credential: "Lebanese Baccalaureate — General Sciences",
      period: "2006 – 2018",
      location: "Lebanon",
      note: "Second place in the AUB nationwide physics competition.",
    },
  ],

  languages: [
    { name: "Arabic",  label: "Native" },
    { name: "Russian", label: "Native" },
    { name: "English", label: "Native" },
    { name: "German",  label: "C2 · DSH-3" },
    { name: "French",  label: "C1 · Advanced" },
  ],

  projects: [
    {
      slug: "pallet-detection",
      title: "Pallet Detection and Localization Module",
      summary:
        "A module that detects and localizes pallets so forklift robots can " +
        "pick them reliably while sharing the floor with people — cutting " +
        "failed picks from 20% to 0.3%.",
      tags: ["C++", "Python", "Bash", "ROS 1", "ROS 2", "PCL", "OpenCV",
        "Open3D", "Eigen", "OpenVINO", "TensorFlow", "PyTorch", "ffmpeg",
        "Gazebo", "RViz", "NumPy", "SciPy", "Cython", "cProfile", "6-DoF Pose",
        "Depth Cameras", "3D LiDAR", "2D LiDAR", "Extrinsic Calibration",
        "Machine Learning", "Point Clouds", "Geometry", "Sensor Fusion"],
      // media is a list — clips/images stack in the column to fill the space
      // next to the text; set type to "video" / "gif" / "image".
      media: [
        {
          type: "video",
          src: "media/pallet_detector_showcase_foil.mp4",
          poster: "",
          speed: 2,
          alt: "The pallet-detection module running on a pallet wrapped with foil.",
        },
        {
          type: "video",
          src: "media/pallet_detector_showcase_run.mp4",
          poster: "",
          speed: 2,
          alt: "Pallet detection run with an occluded pallet.",
        },
        {
          type: "video",
          src: "media/pallet_detect_showcase_no_rgb.mp4",
          poster: "",
          alt: "Pallet detection on depth data alone, under occlusion and non-ideal placement.",
        },
      ],
      links: { repo: "", demo: "", writeup: "" },
      overview:
        "These forklift robots work on the same floor as people, so pallets " +
        "are never presented ideally — they end up skewed, badly placed, with " +
        "broken slats, shrink-wrapped in reflective foil, or partly hidden by " +
        "paper and boxes sticking out of the load. To pick one correctly the " +
        "robot first has to detect the pallet and localize its full pose so " +
        "the forks line up with the pockets, and in those non-ideal conditions " +
        "the fleet was failing roughly one pick in five.\n\n" +
        "I built the module that fixes that: a detection and localization " +
        "pipeline, running on two depth cameras, that stays accurate even when " +
        "the pallet is damaged, wrapped, or partly occluded — recovering a " +
        "pose precise enough to drive the forks in. It brought the failed-pick " +
        "rate down from 20% to 0.3%.",
      architecture: {
        src: "",
        alt: "Data flow from two depth cameras through segmentation and pose estimation to a 6-DoF pallet pose.",
      },
      stack: ["C++", "Python", "Bash", "ROS 1", "ROS 2", "PCL", "OpenCV", "Open3D", "OpenVINO", "TensorFlow", "PyTorch", "ffmpeg"],
      contributions: [
        "The full detection-and-localization pipeline, end to end.",
        "Detection algorithm that finds pallets reliably despite occlusion, damage, and reflective foil wrap.",
        "6-DoF pose estimation accurate enough to align the forks with the pockets for insertion.",
        "Depth-cameras calibration and streams fusion.",
        "Optimized and tuned to run in real-time on the robot's onboard compute with no gpu.",
      ],
      results: [
        "Cut the failed-pick rate from 20% to 0.3% — near-eliminating misses caused by non-ideal pallet placement and condition.",
        "Reliable enough for the robots to pick alongside people, where pallets are routinely skewed, damaged, wrapped, or partly occluded.",
      ],
    },

    {
      slug: "sensor-calibration",
      title: "Multi-Sensor Auto-Calibration",
      summary:
        "A fully automatic calibration system that aligns a six-sensor " +
        "suite (2x 3D lidars, 2x 2D lidars, 2x depth cameras) with no manual " +
        "tuning — cutting per-unit calibration effort from hours to minutes.",
      tags: ["C++", "Extrinsic Calibration", "Sensor Fusion", "3D LiDAR", "Depth Cameras"],
      media: [
        {
          type: "image",
          src: "media/calibration_general.png",
          poster: "",
          alt: "The six-sensor suite aligned into a single coherent point cloud after calibration.",
        },
        {
          type: "image",
          src: "media/calibration_differentiated.png",
          poster: "",
          alt: "The same scene with each sensor's points colour-differentiated to show the alignment.",
        },
        {
          type: "image",
          src: "media/calibration_upclose.png",
          poster: "",
          alt: "Close-up of the aligned point clouds, showing tight agreement between sensors.",
        },
      ],
      links: { repo: "", demo: "", writeup: "" },
      overview:
        "Every robot leaving the line needs its sensors extrinsically " +
        "calibrated, and target-board calibration is slow, manual, and hard to " +
        "repeat per unit. I built a fully targetless auto-calibration system for " +
        "a six-sensor suite — two 3D LiDARs, two 2D LiDARs, and two depth " +
        "cameras — that aligns itself automatically with no targets and no " +
        "manual tuning.",
      architecture: {
        src: "",
        alt: "Six sensor streams feeding a targetless extrinsic-calibration solver that outputs a unified transform tree.",
      },
      stack: ["C++", "Python", "PCL", "Open3D", "Eigen", "ROS 1", "ROS 2", "Rviz"],
      contributions: [
        "Built a targetless extrinsic-calibration solver for a mixed suite of 3D LiDAR, 2D LiDAR, and depth cameras.",
        "Removed the manual target-board step so every robot can self-calibrate during commissioning.",
        "Produced a unified transform tree that the rest of the perception and navigation stack builds on.",
      ],
      results: [
        "Aligns all six sensors automatically with no manual tuning.",
        "Cuts per-unit calibration effort from hours to minutes, and makes it repeatable across the fleet.",
      ],
    },

    {
      slug: "curb-sidewalk-tracer",
      title: "Automated Curb & Sidewalk Tracer",
      summary:
        "An extractor that traces clean 3D polylines through raw urban LiDAR " +
        "using a local 'density-ridge walking' traversal, robust to parked " +
        "cars, trees, and weathered curbs.",
      tags: ["C++", "Point Clouds", "3D LiDAR", "Geometry", "Open3D"],
      media: [
        {
          type: "video",
          src: "media/sidewalk_tracing_1.mp4",
          poster: "",
          speed: 2,
          alt: "Automated tracing following a curb line through a raw urban point cloud.",
        },
        {
          type: "video",
          src: "media/sidewalk_tracing_2.mp4",
          poster: "",
          speed: 2,
          alt: "The tracer staying robust through clutter — parked cars, trees, and weathered curbs.",
        },
        // {
        //   type: "video",
        //   src: "media/Nest3D_preview.mp4",
        //   poster: "",
        //   alt: "Nest3D reconstruction tooling preview.",
        // },
      ],
      links: { repo: "", demo: "", writeup: "" },
      overview:
        "Turning a raw street scan into usable as-built geometry means finding " +
        "the curb line in millions of noisy points. I built an automated " +
        "extractor that traces clean 3D polylines through urban point clouds " +
        "using a local 'density-ridge walking' traversal, staying robust on " +
        "messy real-world data — parked cars, trees, weathered curbs — through " +
        "adaptive corner tracking and obstacle skip-ahead, with live feedback, " +
        "a user-editable cross-section template, and placeable trace barriers.",
      architecture: {
        src: "",
        alt: "Raw urban point cloud feeding a density-ridge-walking tracer that outputs clean 3D curb polylines.",
      },
      stack: ["C++", "Python", "Open3D", "PCL", "NumPy", "SciPy"],
      contributions: [
        "Built a 'density-ridge walking' traversal that traces clean 3D polylines through raw urban point clouds.",
        "Made it robust to parked cars, trees, and weathered curbs via adaptive corner tracking and obstacle skip-ahead.",
        "Added live feedback, a user-editable cross-section template, and placeable trace barriers to steer the trace.",
      ],
      results: [
        "Produces clean, CAD-ready curb polylines directly from messy real-world scans.",
        "Keeps a human in the loop to correct edge cases without hand-digitizing the whole line.",
      ],
    },
  ],
};
