export default function gateTimeZones () {
  const supportedTimeZones = Intl.supportedValuesOf("timeZone");

  return supportedTimeZones.map(timeZone => {
    const options = { timeZoneName: "short", timeZone };
    const formatter = new Intl.DateTimeFormat("fr", options);
    const parts = formatter.formatToParts().find(item => item.type === "timeZoneName").value;

    return { value: timeZone, label: `(${parts}) ${timeZone}` };
  });
}
