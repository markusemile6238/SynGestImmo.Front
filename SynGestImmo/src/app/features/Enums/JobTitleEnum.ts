export enum JobTitleEnum{
  // --- Management & Administration (Direction) ---
  GeneralManager = 1,          // Directeur Général
  OperationsManager = 2,       // Responsable des opérations
  AdministrativeAssistant = 3, // Assistant(e) administratif(ve)

  // --- Property Management (Gestion de copropriété) ---
  PropertyManager = 4,         // Gestionnaire de copropriété / Syndic
  JuniorPropertyManager = 5,   // Gestionnaire junior
  PortfolioManager = 6,        // Gestionnaire de portefeuille immobilier
  AssistantPropertyManager = 7,// Assistant(e) de copropriété

  // --- Financial & Accounting (Comptabilité) ---
  PropertyAccountant = 8,      // Comptable copropriété
  AccountsPayableClerk = 9,    // Chargé des comptes fournisseurs
  AccountsReceivableClerk = 10,// Chargé du recouvrement (charges)
  FinancialController = 11,    // Contrôleur financier

  // --- Technical & Maintenance (Technique) ---
  TechnicalManager = 12,       // Responsable technique
  MaintenanceCoordinator = 13, // Coordinateur de maintenance
  BuildingInspector = 14,      // Inspecteur technique d'immeuble
  OnSiteCaretaker = 15,        // Gardien / Concierge (employé par le syndic)

  // --- Legal & Compliance (Juridique) ---
  LegalCounsel = 16,           // Juriste immobilier
  ComplianceOfficer = 17,       // Responsable conformité / règlements

  // --- Administrative & Support (Secrétariat et Accueil) ---
  Receptionist = 18,           // Réceptionniste / Standardiste
  OfficeManager = 19,          // Responsable d'office (coordination interne)
  ExecutiveSecretary = 20,     // Secrétaire de direction
  AdministrativeClerk = 21,    // Commis administratif (saisie de données)
  MailroomCoordinator = 22,    // Gestionnaire de courrier (crucial pour les AG)
  Archivist = 23,              // Archiviste (gestion des dossiers d'immeubles)

  // --- Human Resources (Si le syndic est une grande structure) ---
  HRManager = 24,              // Responsable RH (pour gérer les gardiens d'immeubles)
  PayrollSpecialist = 25,      // Gestionnaire de paie

  // --- Communication & IT ---
  CommunicationOfficer = 26,   // Chargé de communication (portail copropriété)
  ITSupportTechnician = 27,    // Technicien informatique

  // --- Sales & Development (Développement du portefeuille) ---
  BusinessDevelopmentManager = 28, // Chargé de développement (recherche de nouvelles copropriétés)
}

export const JOB_TITLE_OPTIONS = [

  // no jobTitle
  { id:null,name:"None / Not Applicable"},

  // --- Management & Administration ---
  { id: JobTitleEnum.GeneralManager, name: "General Manager" },
  { id: JobTitleEnum.OperationsManager, name: "Operations Manager" },
  { id: JobTitleEnum.AdministrativeAssistant, name: "Administrative Assistant" },

  // --- Property Management ---
  { id: JobTitleEnum.PropertyManager, name: "Property Manager" },
  { id: JobTitleEnum.JuniorPropertyManager, name: "Junior Property Manager" },
  { id: JobTitleEnum.PortfolioManager, name: "Portfolio Manager" },
  { id: JobTitleEnum.AssistantPropertyManager, name: "Assistant Property Manager" },

  // --- Financial & Accounting ---
  { id: JobTitleEnum.PropertyAccountant, name: "Property Accountant" },
  { id: JobTitleEnum.AccountsPayableClerk, name: "Accounts Payable Clerk" },
  { id: JobTitleEnum.AccountsReceivableClerk, name: "Accounts Receivable Clerk" },
  { id: JobTitleEnum.FinancialController, name: "Financial Controller" },

  // --- Technical & Maintenance ---
  { id: JobTitleEnum.TechnicalManager, name: "Technical Manager" },
  { id: JobTitleEnum.MaintenanceCoordinator, name: "Maintenance Coordinator" },
  { id: JobTitleEnum.BuildingInspector, name: "Building Inspector" },
  { id: JobTitleEnum.OnSiteCaretaker, name: "On-Site Caretaker" },

  // --- Legal & Compliance ---
  { id: JobTitleEnum.LegalCounsel, name: "Legal Counsel" },
  { id: JobTitleEnum.ComplianceOfficer, name: "Compliance Officer" },

  // --- Administrative & Support ---
  { id: JobTitleEnum.Receptionist, name: "Receptionist" },
  { id: JobTitleEnum.OfficeManager, name: "Office Manager" },
  { id: JobTitleEnum.ExecutiveSecretary, name: "Executive Secretary" },
  { id: JobTitleEnum.AdministrativeClerk, name: "Administrative Clerk" },
  { id: JobTitleEnum.MailroomCoordinator, name: "Mailroom Coordinator" },
  { id: JobTitleEnum.Archivist, name: "Archivist" },

  // --- Human Resources ---
  { id: JobTitleEnum.HRManager, name: "HR Manager" },
  { id: JobTitleEnum.PayrollSpecialist, name: "Payroll Specialist" },

  // --- Communication & IT ---
  { id: JobTitleEnum.CommunicationOfficer, name: "Communication Officer" },
  { id: JobTitleEnum.ITSupportTechnician, name: "IT Support Technician" },

  // --- Sales & Development ---
  { id: JobTitleEnum.BusinessDevelopmentManager, name: "Business Development Manager" }
];
