export const VISUALIZATIONS = [
  {
      src: process.env.PUBLIC_URL + '/img/dataviz/img1.png',
      alt: 'Population Trends Visualization',
      title: 'Population Trends',
      code: `# TidyTuesday Visualization - Population Trends
library(ggplot2)
library(dplyr)

ggplot(population_data, aes(x = year, y = value)) +
geom_line(color = "#2D336B") +
geom_point(color = "#7886C7") +
theme_minimal() +
labs(
  title = "Population Growth Over Time",
  x = "Year",
  y = "Population (millions)"
)`
  },
  {
      src: process.env.PUBLIC_URL + '/img/dataviz/img2.png',
      alt: 'Category Analysis Visualization',
      title: 'Category Analysis',
      code: `# Category Analysis
library(ggplot2)
library(dplyr)

data %>%
group_by(category) %>%
summarise(
  total = sum(value)
) %>%
ggplot(aes(x = category, y = total, fill = category)) +
geom_col() +
scale_fill_brewer(palette = "Blues")`
  },
  {
      src: process.env.PUBLIC_URL + '/img/dataviz/img3.png',
      alt: 'Interactive Plot Visualization',
      title: 'Interactive Plot',
      code: `# Interactive Plot
library(plotly)

p <- ggplot(data, aes(x = x, y = y, color = group)) +
geom_point() +
theme_light()

ggplotly(p)`
  },
  {
      src: process.env.PUBLIC_URL + '/img/dataviz/img4.png',
      alt: 'Animated Visualization',
      title: 'Animated Plot',
      code: `# Animated Visualization
library(gganimate)

p <- ggplot(data, aes(x = gdp, y = lifeExp, size = pop, color = continent)) +
geom_point(alpha = 0.7) +
scale_color_viridis_d() +
scale_size(range = c(2, 12)) +
theme_minimal() +
labs(title = 'Year: {frame_time}')

anim <- p + transition_time(year) +
ease_aes('linear')`
  }
];