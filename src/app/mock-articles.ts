import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'My first article',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit orci, accumsan a hendrerit et, elementum in tortor. Aliquam interdum elit felis, quis molestie nisl iaculis elementum. Vestibulum auctor ornare ante, faucibus cursus sem ultricies sed. Phasellus turpis dolor, pretium ac rutrum vitae, venenatis eu eros. Vivamus rutrum ac felis et iaculis. In velit lorem, aliquam vel suscipit eget, porttitor et lectus. Aliquam purus turpis, mollis nec tincidunt id, imperdiet in est. Pellentesque blandit semper aliquet. Aenean maximus nisl consequat dui condimentum finibus.',
    description: "This is my first article! It's great. Please read it. :)",
    key: 'my-first-article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular.svg',
  },
  {
    id: 2,
    title: 'The second article',
    content:
      'Morbi vel sapien sed nisl convallis ultricies. Nam sit amet risus convallis, volutpat elit at, efficitur augue. Nam odio mi, fringilla in euismod sit amet, facilisis a nisi. Fusce aliquet magna in libero scelerisque, at gravida nunc tristique. Ut nibh libero, laoreet scelerisque ipsum in, varius convallis libero. Quisque suscipit, libero at commodo pharetra, arcu sem porta libero, at rhoncus ex nulla vel velit. Maecenas iaculis mattis libero, nec iaculis tortor efficitur sed. Proin fringilla turpis quis molestie sodales. Nunc viverra nibh ipsum, non tempor sapien egestas at. Vestibulum commodo massa quis est elementum, ut malesuada est bibendum.',
    description: 'Also a great artice',
    key: 'the-second-article',
    date: new Date(),
    imageUrl:
      'http://angular.io/assets/images/logos/angular/angular_solidBlack.svg',
  },
];
