/*
 * Approved data model for the healthcare facility readiness dashboard.
 * This file preserves the existing dashboard and supplies the agreed incident model.
 */
window.JahiziaApproved = {
  facilities: Array.from({length: 21}, (_, i) => `شفا ${i + 1}`),
  incidentTypes: [
    "الكهرباء",
    "المياه",
    "التكييف",
    "النظام الإلكتروني",
    "الطاقة الاحتياطية",
    "أخرى"
  ],
  electricitySources: ["داخلي", "خارجي"],
  impactScopes: ["كلي", "جزئي"],
  incidentStatus: ["نشط", "مغلق"],
  activeIncidentOrdering: ["الأولوية", "الأقدم"],
  incidentFields: [
    "نوع البلاغ",
    "نوع البلاغ - أخرى",
    "مصدر الكهرباء",
    "نطاق التأثير",
    "القسم المتأثر",
    "تأثير البلاغ على الخدمات الصحية",
    "مصدر البلاغ",
    "اسم المبلّغ",
    "الوصف",
    "الملاحظات"
  ]
};
