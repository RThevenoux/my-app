import { Injectable } from '@nestjs/common';
import { env } from 'process';

const local = (env.LOCAL ? env.LOCAL : 'FR');

@Injectable()
export class AppService {
  getHello(): string {
    switch (local) {
      case 'af': return 'Hello Wêreld!';
      case 'sq': return 'Përshendetje Botë!';
      case 'ar': return 'بالعالم!';
      case 'hy': return 'Բարեւ աշխարհ!';
      case 'eu': return 'Kaixo Mundua!';
      case 'be': return 'Прывітанне Сусвет!';
      case 'bg': return 'Здравей свят!';
      case 'ca': return 'Hola món!';
      case 'zh': return '你好世界！';
      case 'hr': return 'Pozdrav svijete!';
      case 'cs': return 'Ahoj světe!';
      case 'da': return 'Hej Verden!';
      case 'nl': return 'Hallo Wereld!';
      case 'en': return 'Hello World!';
      case 'et': return 'Tere maailm!';
      case 'fi': return 'Hei maailma!';
      case 'fr': return 'Bonjour monde!';
      case 'ka': return 'გამარჯობა მსოფლიო!';
      case 'de': return 'Hallo Welt!';
      case 'el': return 'Γειά σου Κόσμε!';
      case 'he': return 'שלום עולם!';
      case 'hi': return 'नमस्ते दुनिया!';
      case 'hu': return 'Helló Világ!';
      case 'is': return 'Halló heimur!';
      case 'id': return 'Halo Dunia!';
      case 'it': return 'Ciao mondo!';
      case 'ja': return 'こんにちは世界！';
      case 'kk': return 'Сәлем Әлем!';
      case 'ky': return 'Салам дүйнө!';
      case 'lv': return 'Sveika pasaule!';
      case 'lt': return 'Labas pasauli!';
      case 'de-LU': return 'Moien Welt!';
      case 'mk': return 'Здраво свету!';
      case 'ms': return 'Hai dunia!';
      case 'mn': return 'Сайн уу дэлхий!';
      case 'nb': return 'Hei Verden!';
      case 'ps': return 'سلام نړی!';
      case 'fa': return 'سلام دنیا!';
      case 'pl': return 'Witaj świecie!';
      case 'pt': return 'Olá Mundo!';
      case 'pa': return 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ!';
      case 'ro': return 'Salut Lume!';
      case 'ru': return 'Привет мир!';
      case 'sr': return 'Здраво Свете!';
      case 'sl': return 'Pozdravljen svet!';
      case 'es': return '¡Hola Mundo!';
      case 'sw': return 'Salamu Dunia!';
      case 'sv': return 'Hej världen!';
      case 'th': return 'สวัสดีชาวโลก!';
      case 'tr': return 'Selam Dünya!';
      case 'uk': return 'Привіт Світ!';
      case 'uz': return 'Salom Dunyo!';
      case 'vi': return 'Chào thế giới!';
      case 'cy': return 'Helo Byd!';
      case 'xh': return 'Molo Lizwe!';
      case 'zu': return 'Sawubona Mhlaba!';
      default:
        return `[Hello World!] (${local} not supported)`;
    }
  }
}
