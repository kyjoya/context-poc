import React from 'react';

export const campaignConfig = {
  campaignQuestions: [
    {
      label: 'Are you Pregnant?',
      key: 'areYouPregnant',
      fieldType: 'text',
      ariaText: ''
    }
  ]
}

export const benefitsConfig = {
  benefits: {
    snap: {
      category: 'food',
    summary: 'The Supplemental Nutrition Assistance Program (SNAP) is a federal assistance program\n' +
      'the provides money to help pay for groceries.',
      assistor: 'compass_pa',
      phoneAssistor: 'pa-benefits-center',
      questionIds: ['e65a22e3-4ec2-4b1e-9bae-61d6d83d427a']
    },
    ptrr: {
      category: 'housing',
      summary: 'The Property Tax and Rent Rebate program (PTRR) is a free state benefit that provides property tax\n' +
      'and rent relief for qualified Pennsylvanians. PTRR is supported and funded by the PA Lottery and gives\n' +
      'qualified individuals a rebate on their property taxes or rent paid in the previous year.',
      assistor: 'ptrr',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    homestead: {
      category: 'housing',
      summary: 'The Homestead program lowers the taxable amount of a homeowner’s property\n' +
      'and therefore lowers Property Taxes each year. Generally, most owner-occupied homes and farms\n' +
      'are eligible for property tax reduction.',
      assistor: 'homestead',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    liheap: {
      category: 'housing',
      summary: 'The Low-Income Home Energy Assistance Program (LIHEAP) is a state benefit designed to lower energy costs\n' +
      'for low-income households. LIHEAP works by helping families to pay their heating and cooling bills,\n' +
      'weatherize their homes, and complete necessary energy-saving repairs.',
      assistor: 'compass_pa',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    pace: {
      category: 'health',
      summary: 'The Pharmaceutical Assistance Contract for the Elderly (PACE) offers low-cost prescription\n' +
      'medication to qualified Pennsylvania residents over age 65. PACE lowers prescription copays and works\n' +
      'with Medicare Part D to save seniors the most on their medications.',
      assistor: 'pace',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    lis: {
      category: 'health',
      summary: 'The Low-Income Subsidy (LIS), otherwise known as Medicare Extra Help, is a federal benefit\n' +
      'designed to lower prescription copays for low income individuals receiving Medicare. It works with\n' +
      'Medicare Part D (Prescriptions) to lower Part D copays, deductibles, and premiums.',
      assistor: 'compass_pa',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    medicaid: {
      category: 'health',
      summary: 'Medicaid is a federal benefit that provides free or low-cost health coverage to low\n' +
      'income Americans. Medicaid works as stand-alone health coverage, or as a safety net for those\n' +
      'with Medicare.',
      assistor: 'compass_pa',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    chip: {
      category: 'health',
      summary: 'The Children’s Health Insurance Program (CHIP) provides health insurance for eligible\n' +
      'children, through both Medicaid and separate CHIP programs. The program is funded jointly by\n' +
      'states and the federal government.',
      assistor: 'compass_pa',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    msp: {
      category: 'health',
      summary: 'The Medicare Savings Program (MSP) works by paying for some or all of the Medicare Part B\n' +
      '(Medical) premium that is usually deducted from Social Security benefits. The portion of Part B\n' +
      'covered by MSP is then added back to the recipient’s Social Security benefits.',
      assistor: 'compass_pa',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    qhp: {
      category: 'health',
      summary: 'Qualified Health Plans (QHPs) are specific health coverage plans that meet requirements\n' +
      'designated by the Affordable Care Act. They are required to cover many basic health needs including\n' +
      'emergency services, preventative care, and prescription drugs.',
      assistor: 'compass_pa',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    tanf: {
      category: 'money',
      summary: 'Temporary Assistance for Needy Families (TANF) is a long-standing federal assistance\n' +
      'program designed to get families back on their feet and offer support services to keep families\n' +
      'from falling back under the poverty level.',
      assistor: 'tanf',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    ctc: {
      category: 'money',
      summary: 'The Child Tax Credit provides an extra measure of tax relief for taxpayers with\n' +
      'qualifying dependents. It is designed to help families in lower and middle income brackets by\n' +
      'offsetting the cost of raising children.',
      assistor: 'ctc',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    eitc: {
      category: 'money',
      summary: 'The Earned Income Tax Credit (EITC) is a federal tax credit for low- and moderate-income\n' +
      'working people that encourages and rewards work and offsets federal payroll and income taxes.',
      assistor: 'eitc',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    wic: {
      category: 'food',
      summary: 'Women and Infant Children (WIC) is a federal program for any caregiver of a child or\n' +
      'children under 5 years of age. WIC provides nutrition services, breastfeeding support, health\n' +
      'care and social service referrals, and healthy foods to low income families.',
      assistor: 'compass_pa',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    ccis: {
      category: 'care',
      summary: 'The Child Care Works Subsidized Child Care Program (CCIS) is a state subsidy to pay for\n' +
      'childcare while a parent is at work or school. It is commonly used to pay for child care at any\n' +
      'licensed child care program that participates in the program.',
      assistor: 'compass_pa',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    fafsa: {
      category: 'education',
      summary: 'The Free Application for Federal Student Aid (FAFSA) is a form to help current and\n' +
      'prospective college students receive financial aid to attend a higher learning institution.\n' +
      'Completing the FAFSA makes it easy for students to access available loans, grants and work-study\n' +
      'options.',
      assistor: 'fafsa',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    hs: {
      category: 'education',
      summary: 'The Head Start program promotes school readiness for children in low-income families by\n' +
      'offering educational, nutritional, health, social, and other services. Head Start programs not\n' +
      'only provide access to affordable and reliable childcare, they also work with families to help\n' +
      'ensure children have access to needed services and resources, like health insurance.',
      assistor: 'hs',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    },
    uc: {
      category: 'work',
      summary: 'The Unemployment Compensation (UC) program provides temporary income support for those who have\n' +
      'lost their jobs or are working less than their regular full time hours through no fault of their own.',
      assistor: 'uc',
      phoneAssistor: 'pa-benefits-center',
      questionIds: []
    }
  }
}

export const CampaignContext = React.createContext(
  campaignConfig['campaignQuestions']
);
