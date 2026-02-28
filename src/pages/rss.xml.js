import rss from '@astrojs/rss';

export function GET(context) {
  return rss({
    title: 'String Prairie Heating & Air Blog',
    description: 'HVAC tips, maintenance advice, and industry insights for Bastrop County homeowners from String Prairie Heating & Air.',
    site: context.site,
    items: [
      {
        title: 'HVAC Repair Costs in Bastrop County 2026',
        pubDate: new Date('2025-01-15'),
        description: 'A complete guide to HVAC repair costs in Bastrop County for 2026, including pricing for common repairs and what affects costs.',
        link: '/blog/hvac-repair-costs-bastrop-2026',
      },
      {
        title: 'How to Choose the Right AC Size for Your Home',
        pubDate: new Date('2024-12-15'),
        description: 'Learn how to select the perfectly sized air conditioning system for your Central Texas home based on square footage, insulation, and climate factors.',
        link: '/blog/how-to-choose-right-ac-size',
      },
      {
        title: 'Signs Your Ductwork Needs Repair',
        pubDate: new Date('2024-12-01'),
        description: 'Learn the warning signs that your ductwork needs professional repair and how damaged ducts affect your HVAC efficiency and comfort.',
        link: '/blog/signs-ductwork-needs-repair',
      },
      {
        title: 'HVAC Costs in Bastrop County: What to Expect',
        pubDate: new Date('2024-11-15'),
        description: 'A comprehensive guide to HVAC costs in Bastrop County including installation, repair, and maintenance pricing.',
        link: '/blog/hvac-costs-bastrop-county',
      },
      {
        title: 'How Long Does an AC Last in Texas?',
        pubDate: new Date('2024-11-10'),
        description: 'Find out how long your air conditioning system should last in the demanding Texas climate and what factors affect its lifespan.',
        link: '/blog/how-long-does-ac-last-texas',
      },
      {
        title: 'Best Thermostat Settings for Texas Summer',
        pubDate: new Date('2024-11-05'),
        description: 'Optimize your thermostat settings for energy savings and comfort during the hot Texas summer months.',
        link: '/blog/best-thermostat-settings-texas-summer',
      },
      {
        title: 'Spring HVAC Maintenance: Getting Your System Ready for Summer',
        pubDate: new Date('2024-11-01'),
        description: 'Prepare your air conditioning system for the hot Texas summer with these essential maintenance tips and tasks.',
        link: '/blog/spring-hvac-maintenance-tips',
      },
      {
        title: 'Preparing Your Heating System for Texas Winter',
        pubDate: new Date('2024-10-20'),
        description: 'Get your heating system ready for Central Texas winter with these professional preparation tips.',
        link: '/blog/preparing-heating-system-texas-winter',
      },
      {
        title: 'Winterize Your HVAC System',
        pubDate: new Date('2024-10-15'),
        description: 'A complete guide to winterizing your HVAC system for the Central Texas climate to ensure reliable heating all season.',
        link: '/blog/winterize-your-hvac-system',
      },
      {
        title: 'When to Replace Your HVAC System',
        pubDate: new Date('2024-10-01'),
        description: 'Know the signs that indicate it is time to replace your HVAC system and how to make the right decision for your home.',
        link: '/blog/when-to-replace-your-hvac-system',
      },
    ],
  });
}
