import { discordConfig } from '../configs/discordConfig.js';
import { Client, GatewayIntentBits } from 'discord.js';
import { getArt, getJokes, getQuote, getRandomPokemon } from './otherApis.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(discordConfig.discord_bot);

async function discordProcess(reaction) {
  if (reaction.name === 'post_message') {
    try {
      const channelId = reaction.data.channel_id;
      const channel = client.channels.cache.get(String(channelId));

      if (channel) {
        await channel.send(reaction.data.body);
      } else {
        console.error('Channel not found.');
      }
    } catch (err) {
      console.error(err);
    }
  }
  if (reaction.name === 'post_joke') {
    try {
      const channel = client.channels.cache.get(reaction.data.channel_id);
      if (channel) {
        const joke = await getJokes();
        await channel.send(joke);
      } else {
        console.error('Channel not found.');
      }
    } catch (err) {
      console.error(err);
    }
  }
  if (reaction.name === 'post_art') {
    try {
      const channel = client.channels.cache.get(reaction.data.channel_id);
      if (channel) {
        const artwork = await getArt();
        await channel.send(artwork);
      } else {
        console.error('Channel not found.');
      }
    } catch (err) {
      console.error(err);
    }
  }
  if (reaction.name === 'post_quote') {
    try {
      const channel = client.channels.cache.get(reaction.data.channel_id);
      if (channel) {
        const quote = await getQuote();
        await channel.send(quote);
      } else {
        console.log('Channel not found.');
      }
    } catch (err) {
      console.error(err);
    }
  }
  if (reaction.name === 'post_pokemon') {
    try {
      const channel = client.channels.cache.get(reaction.data.channel_id);
      if (channel) {
        const pokemon = await getRandomPokemon();
        await channel.send(pokemon);
      } else {
        console.log('Channel not found.');
      }
    } catch (err) {
      console.error(err);
    }
  }
}

function discordReact(area) {
  for (var i = 0; area.reaction.length > i; i++) {
    discordProcess(area.reaction[i]);
  }
}

export { discordReact };
