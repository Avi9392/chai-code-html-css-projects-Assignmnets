let parent = document.querySelector('.nav').parentElement; // Change 'nav' to your navbar class
while (parent) {
  const hasOverflow = getComputedStyle(parent).overflow;
  if (hasOverflow !== 'visible') {
    console.log("Found sticky-breaker:", hasOverflow, parent);
    alert("HERE IS an issue", parent = parent.parentElement)
  }
  parent = parent.parentElement;
}

//-->FOR THE ABOVE CODE NOTES<--//
// Change 'nav' to your navbar class
// while (parent) {
//   const hasOverflow = getComputedStyle(parent).overflow;
//   if (hasOverflow !== 'visible') {
//     console.log("Found sticky-breaker:", hasOverflow, parent);
//   }
//   parent = parent.parentElement;
//  }
//  This script is a debugging tool designed to find "sticky breakers"—any parent element that prevents position: sticky from working.
//  How it works:
//  Targeting: It starts at your navbar (nav) and looks at its parentElement.
//  The Loop: It climbs up the HTML tree (from navbar → div → section → body → html).
//  The Check: It uses getComputedStyle to see if that parent has overflow set to anything other than visible.
//  The Report: If it finds hidden, auto, or scroll, it logs that specific element to your Console so you know exactly what to fix.
//  Why you need it:
//  As noted on MDN Web Docs, a sticky element stays within its "sticky container." If any ancestor has an overflow value that clips content, the browser loses track of the scroll position, and your navbar stays stuck at the top of that parent instead of the whole page. Michael Movsesov's guide highlights this as the #1 reason sticky fails.
//  To fix the issue: Go to the element the script finds and change its CSS to overflow: visible;.
//  Do you want to know how to run this script directly in your Chrome or Edge browser right now? //