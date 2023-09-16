const RATE_PLANS = [
  {
    title: "Free",
    price: 0,
    items: [
      "1 user 1 connected calendar",
      "Google Workspace, Exchange?",
      "Up to 12 responses",
      "Up to 3 survey results archived",
      "7 Days of insight report storage for past meetings ",
      "Knowledge base"
    ],
    buttonLabel: "Get Free",
    buttonType: "primary",
    type: "default"
  },
  {
    title: "Personal",
    price: 10,
    planTypes: [
      { label: "Monthly", value: "Monthly" },
      { label: "Annually", value: "Annually" }
    ],
    items: [
      "1 user up to 2 connected calendars",
      "Google Workspace, Exchange?",
      "Up to 50 responses",
      "Up to 10 survey results archived",
      "30 Days of insight report storage for past meetings ",
      "Unlimited customization of questions",
      "Up to 5 survey templates",
      "Standard email & chat"
    ],
    buttonLabel: "Get Personal",
    buttonType: "secondary",
    type: "primary"
  },
  {
    title: "Team",
    price: 10,
    items: [
      "Per user in company domain with single calender integrations",
      "Google Workspace, Exchange?",
      "Unlimited responses",
      "Unlimited survey results archived",
      "Unlimited insight report storage for past meetings ",
      "Unlimited customization of questions",
      "Unlimited survey templates",
      "Resend your survey",
      "Priority email & chat"
    ],
    buttonLabel: "Get Team",
    buttonType: "primary",
    type: "default"
  }
];

export default RATE_PLANS;
