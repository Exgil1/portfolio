// Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // close mobile menu when a link clicked
  document.querySelectorAll(".nav-links a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("show"))
  );
}

// Project Details Data
const projectsData = {
  calculator: {
    title: "Project Calculator",
    description: "A full functional calculator application built with HTML, CSS, and JavaScript.",
    features: [
      "Basic arithmetic operations (addition, subtraction, multiplication, division)",
      "Clear and delete functions",
      "Responsive design",
      "User-friendly interface"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Completed"
  },
  greyroom: {
    title: "Project GREY ROOM",
    description: "An engaging game project where a man is mysteriously trapped in a grey room, unaware of the reason.",
    features: [
      "Immersive storyline and mystery element",
      "Interactive gameplay mechanics",
      "Puzzle-solving challenges",
      "Atmospheric graphics and sound design",
      "Multiple endings"
    ],
    technologies: ["Game Development", "Graphics", "Storytelling"],
    status: "Completed"
  },
  qms: {
    title: "QMS Application (Capstone Project)",
    description: "A comprehensive desktop Queue Management System built with Electron for real-time customer queue monitoring, ticket generation, and detailed analytics. Features multiple window support, live displays, and advanced data persistence.",
    features: [
      "Real-time queue management with auto-assigned ticket numbers",
      "Batch ticket generation with adaptive padding",
      "VIP priority queue system",
      "Multi-window architecture (Admin, Display Monitor, Counter stations)",
      "Public display with animated 'NOW SERVING' ticker",
      "Comprehensive statistics and monitoring dashboard",
      "SQLite offline database with automatic backups",
      "Advanced search and filtering capabilities",
      "Complete audit trail and login logs",
      "Express.js web server with Socket.io real-time sync",
      "58 comprehensive unit tests with 100% code coverage"
    ],
    technologies: ["Electron", "SQLite", "Express.js", "Socket.io", "HTML5", "CSS3", "JavaScript", "Jest"],
    status: "Production Ready - Completed",
    modules: {
      "Queue Management": "Add customers, auto-assign tickets, batch generation, VIP priority",
      "Service Operations": "Call next customer, complete service, serve queue monitoring",
      "Display System": "Public display monitor with live updates, animated NOW SERVING, next 3 preview",
      "Statistics": "Real-time counts, queue metrics, daily statistics, completed customers",
      "Settings": "Queue size configuration, ticket numbering, system reset",
      "Data Persistence": "SQLite database, automatic backups (every 6 hours), archive system",
      "Multi-Window": "Admin panel, public display, mini counter windows with independent tracking",
      "Testing": "58 unit tests, Jest framework, performance testing (1000+ items)",
      "Networking": "LAN access, Socket.io real-time synchronization, web interface"
    }
  },
  tourism: {
    title: "Tourism Stakeholder Registration Portal",
    description: "A comprehensive web-based platform for managing tourism business registrations, monthly reporting, documentation, and stakeholder communications for Ormoc City Tourism Office.",
    features: [
      "User registration and authentication",
      "Business registration and profile management",
      "Monthly performance reporting system",
      "Document management and approval workflow",
      "Multi-role admin panel (Super Admin, Admin, Staff)",
      "Support ticket system with real-time notifications",
      "Business photo gallery with moderation",
      "Gender-disaggregated reporting capabilities",
      "Secure file upload and storage"
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "PDO"],
    status: "Published & Live",
    link: "https://tourism.lguormoc.org/",
    modules: {
      "Authentication": "User registration, login, email verification",
      "Business Registration": "Multi-step registration, business classification, location management",
      "Document Management": "File uploads, approval workflow, rejection tracking",
      "Monthly Reports": "Revenue tracking, occupancy rates, guest/staff counts",
      "Admin Dashboard": "System statistics, user management, activity tracking",
      "Support System": "Ticket management, multi-message threading, priority handling",
      "Photo Gallery": "Upload, moderation, approval/rejection workflow"
    }
  },
  pos: {
    title: "Wellserve Cooperative POS System",
    description: "A comprehensive desktop application built with Electron and SQLite for managing cooperative membership, financial transactions, and member relationships. Designed for offline-first operation with complete local data storage.",
    features: [
      "Member registration with photo, signature, and document uploads",
      "Centralized transaction ledger (payments, savings, loans, expenses)",
      "Loan application workflow and repayment tracking",
      "Savings, deposits, and CBU (Cooperative Benefit Unit) management",
      "Multiple professional dashboards (Financial, Income, Loans, Deposits, Analytics)",
      "Role-based access control (Super Admin, Admin, Staff)",
      "Complete activity logging and audit trail",
      "Real-time multi-window synchronization",
      "Print-friendly receipts and reports",
      "Advanced filtering and search capabilities"
    ],
    technologies: ["Electron", "SQLite", "better-sqlite3", "Express.js", "Chart.js", "ExcelJS", "HTML5", "CSS3", "JavaScript"],
    status: "90% Complete - Discontinued (Client price disagreement)",
    modules: {
      "Membership Management": "Complete member profiles, photo uploads, searchable masterlist, activity history",
      "Financial Transactions": "Centralized ledger, voucher IDs, transaction receipts, status tracking",
      "Loans Module": "Applications, repayment scheduling, loan analysis with charts",
      "Savings & Deposits": "Initial savings, CBU handling, time deposits, deposit dashboards",
      "Analytics & Reports": "9+ dashboards, trends, member analytics, insurance tracking",
      "Authentication": "Session-based login, permission checks, role-based access",
      "Data Management": "Automatic database creation, backup strategy, data validation",
      "Offline Operation": "Works without internet, all data stored locally on machine"
    }
  }
};


// Open Project Modal
function openProjectModal(projectId) {
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const project = projectsData[projectId];

  if (!project) return;

  modalTitle.textContent = project.title;
  
  let htmlContent = `
    <div class="modal-section">
      <h3>Description</h3>
      <p>${project.description}</p>
    </div>
    
    <div class="modal-section">
      <h3>Key Features</h3>
      <ul style="margin-left: 1.5rem;">
  `;

  project.features.forEach(feature => {
    htmlContent += `<li style="margin-bottom: 0.5rem;">✓ ${feature}</li>`;
  });

  htmlContent += `</ul></div>`;

  // Add modules if tourism, qms, or pos project
  if ((projectId === 'tourism' || projectId === 'qms' || projectId === 'pos') && project.modules) {
    htmlContent += `<div class="modal-section">
      <h3>System Modules</h3>`;
    
    for (const [module, description] of Object.entries(project.modules)) {
      htmlContent += `<p><strong>${module}:</strong> ${description}</p>`;
    }
    htmlContent += `</div>`;
  }

  htmlContent += `
    <div class="modal-section">
      <h3>Technologies Used</h3>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
  `;

  project.technologies.forEach(tech => {
    htmlContent += `<span style="background: rgba(0, 255, 166, 0.2); padding: 0.3rem 0.8rem; border-radius: 15px; border: 1px solid #00ffd5; font-size: 0.9rem;">${tech}</span>`;
  });

  htmlContent += `</div></div>`;

  htmlContent += `
    <div class="modal-section">
      <h3>Status</h3>
      <p><strong>${project.status}</strong></p>
    </div>
  `;

  // Add link if project has one
  if (project.link) {
    htmlContent += `
      <div class="modal-section">
        <h3>🔗 Live </h3>
        <p><a href="${project.link}" target="_blank" style="color: #00ffd5; text-decoration: none; font-weight: bold; padding: 0.5rem 1rem; background: rgba(0, 255, 166, 0.2); border-radius: 5px; display: inline-block; border: 1px solid #00ffd5;">${project.link}</a></p>
      </div>
    `;
  }

  // Add image gallery section for tourism project
  if (projectId === 'tourism') {
    htmlContent += `
      <div class="modal-section">
        <h3>📸 Project System Screenshots</h3>
        <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 1rem;">Tourism Stakeholder Registration Portal Interface</p>
        <div class="modal-gallery" id="tourismGallery">
          <div class="gallery-item">
            <img src="image/tourism-dashboard.png" alt="Tourism Dashboard" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/tourism-dashboard.png')">
          </div>
          <div class="gallery-item">
            <img src="image/tourism-registration.png" alt="Business Registration" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/tourism-registration.png')">
          </div>
          <div class="gallery-item">
            <img src="image/tourism-reports.png" alt="Monthly Reports" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/tourism-reports.png')">
          </div>
          <div class="gallery-item">
            <img src="image/tourism-admin.png" alt="Admin Dashboard" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/tourism-admin.png')">
          </div>
        </div>
      </div>
    `;
  }

  // Add image gallery section for POS project
  if (projectId === 'pos') {
    htmlContent += `
      <div class="modal-section">
        <h3>📸 POS System Screenshots</h3>
        <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 1rem;">Wellserve Cooperative Desktop Application Interface</p>
        <div class="modal-gallery" id="posGallery">
          <div class="gallery-item">
            <img src="image/pos-dashboard.png" alt="POS Dashboard" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/pos-dashboard.png')">
          </div>
          <div class="gallery-item">
            <img src="image/pos-membership.png" alt="Membership Management" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/pos-membership.png')">
          </div>
          <div class="gallery-item">
            <img src="image/pos-transactions.png" alt="Transactions" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/pos-transactions.png')">
          </div>
          <div class="gallery-item">
            <img src="image/pos-reports.png" alt="Reports & Analytics" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/pos-reports.png')">
          </div>
        </div>
      </div>
    `;
  }

  // Add image gallery section for QMS project
  if (projectId === 'qms') {
    htmlContent += `
      <div class="modal-section">
        <h3>📸 QMS System Screenshots</h3>
        <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 1rem;">Queue Management System Interface & Displays</p>
        <div class="modal-gallery" id="qmsGallery">
          <div class="gallery-item">
            <img src="image/qms-admin.png" alt="Admin Panel" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/qms-admin.png')">
          </div>
          <div class="gallery-item">
            <img src="image/qms-display.png" alt="Public Display Monitor" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/qms-display.png')">
          </div>
          <div class="gallery-item">
            <img src="image/qms-queue.png" alt="Queue Management" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/qms-queue.png')">
          </div>
          <div class="gallery-item">
            <img src="image/qms-stats.png" alt="Statistics & Analytics" style="object-fit: cover; cursor: zoom-in;" onclick="openLightbox('image/qms-stats.png')">
          </div>
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = htmlContent;
  modal.style.display = "block";
}

// Close Project Modal
function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.style.display = "none";
}

// Open Lightbox
function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  lightboxImage.src = imageSrc;
  lightbox.classList.add("active");
}

// Close Lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
}

// Close lightbox when clicking outside the image
document.addEventListener("DOMContentLoaded", function() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.addEventListener("click", function(event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }
});

// Close modal when clicking outside
window.addEventListener("click", function(event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeProjectModal();
  }
});
