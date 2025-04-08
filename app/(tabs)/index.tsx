import React, { useState } from 'react';
import styles from '../styles/profileStyles';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  Ionicons,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons';

import profilePic from '../../assets/images/file1.jpeg';
import { Video } from 'expo-av';
import bgVideo from '../../assets/videos/bluep.mp4';


const images = {
  'like1.jpg': require('../../assets/images/like1.jpg'),
  'like2.jpg': require('../../assets/images/like2.jpg'),
  'like3.jpg': require('../../assets/images/like3.jpg'),
  'like4.jpg': require('../../assets/images/like4.jpg'),
  'save1.jpg': require('../../assets/images/save1.jpg'),
  'save2.jpg': require('../../assets/images/like1.jpg'),
  'save3.jpg': require('../../assets/images/save4.jpg'),
  'save4.jpg': require('../../assets/images/like2.jpg'),
  'file1.jpg': require('../../assets/images/file1.jpeg'),
  'file2.jpg': require('../../assets/images/file2.jpg'),
  'file3.jpg': require('../../assets/images/save1.jpg'),
};

const { height: screenHeight } = Dimensions.get('window');

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<'collections' | 'tags'>('collections');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* profile section -------------------------------------------------------------- ------------------------------------------------------*/}
      <View style={styles.profileSection}>
        <Video
          source={bgVideo}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.backgroundAnimation}
        />


        <View style={styles.topRow}>
          <View style={styles.profilePicWrapper}>
            <Image source={profilePic} style={styles.profilePic} />
            <View style={[styles.dot, { top: 6, left: 6 }]} />
            <View style={[styles.dot, { top: 6, right: 6 }]} />
            <View style={[styles.dot, { bottom: 6, left: 6 }]} />
            <View style={[styles.dot, { bottom: 6, right: 6 }]} />
          </View>

          <View style={styles.rightIcons}>
            <TouchableOpacity>
              <Feather name="share-2" size={20} color="#fff" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="settings-outline" size={20} color="#fff" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

          {/* profile description---------------------------------------------------------------------------------------------------------- */}
        <View style={styles.infoSection}>
          <View style={styles.nameEditRow}>
            <View style={styles.nameRowLeft}>
              <Text style={styles.username}>@theo_from_hsr</Text>
              <Ionicons name="checkmark-circle" size={16} color="#00ff88" style={{ marginLeft: 4 }} />
            </View>
            <View style={styles.editRowRight}>
              <AntDesign name="edit" size={14} color="#ccc" />
              <Text style={styles.editText}> Edit Profile</Text>
            </View>
          </View>
          <Text style={styles.flag}>🇮🇳 India</Text>
          <Text style={styles.bio}>18 y/o with high ambitions. want to build cool stuff!</Text>
          <View style={styles.followerRow}>
            <Ionicons name="person" size={16} color="#4da6ff" />
            <Text style={styles.following}> 2 </Text>
            <Text style={styles.following}>Following</Text>
          </View>
        </View>
      </View>

      {/* Tabs Section---------------------------------------------------------------------------------------------------- ----------------------*/}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('collections')} style={styles.tabButton}>
          <FontAwesome5 name="book" size={18} color={activeTab === 'collections' ? '#00ffff' : '#888'} />
          <Text style={[styles.tab, activeTab === 'collections' && styles.activeTab]}>
            Collections
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('tags')} style={styles.tabButton}>
          <FontAwesome name="tags" size={18} color={activeTab === 'tags' ? '#00ffff' : '#888'} />
          <Text style={[styles.tab, activeTab === 'tags' && styles.activeTab]}>
            Manage Tags
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.tabContent}>
        {activeTab === 'collections' ? <CollectionsTab /> : <ManageTagsTab />}
      </ScrollView>
    </View>
  );
}

// -----------------------------------------------------------collection and manage tab function---------------------------------------------------------------------------------------------

function ManageTagsTab() {
  const options = [
    {
      title: 'Tech & Development',
      description: 'Get the latest updates on software, tools and frameworks.',
    },
    {
      title: 'Design & UI/UX',
      description: 'Explore visual inspiration and interaction ideas.',
    },
    {
      title: 'Productivity & Life',
      description: 'Tips and hacks to boost your workflow and creativity.',
    },
  ];

  return (
    <View>
      <Text style={styles.tagIntro}>
        Our recommendations work best when you let us know things:
      </Text>
      {options.map((opt, i) => (
        <View key={i} style={styles.tagButton}>
          <View style={styles.tagTextBlock}>
            <Text style={styles.tagTitle}>{opt.title}</Text>
            <Text style={styles.tagDescription}>{opt.description}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#aaa" />
        </View>
      ))}
    </View>
  );
}

function CollectionsTab() {
  const collections = [
    {
      title: 'Liked',
      count: 32,
      icon: <Ionicons name="heart" size={16} color="#ff4d4d" />,
      images: ['like1.jpg', 'like2.jpg', 'like3.jpg', 'like4.jpg'],
    },
    {
      title: 'Saved',
      count: 23,
      icon: <FontAwesome5 name="bookmark" size={14} color="#00ffff" />,
      images: ['save1.jpg', 'save2.jpg', 'save3.jpg', 'save4.jpg'],
    },
    {
      title: 'Files',
      count: 3,
      icon: <MaterialCommunityIcons name="folder-outline" size={16} color="#ffa500" />,
      images: ['file1.jpg', 'file2.jpg', 'file3.jpg'],
    },
  ];

  return (
    <View style={styles.galleryContainer}>
      {collections.map((col, idx) => (
        <View key={idx} style={styles.card}>
          <View style={styles.imageGrid}>
            {col.images.map((img, i) => (
              <Image key={i} source={images[img]} style={styles.gridImage} />
            ))}
          </View>
          <View style={styles.cardFooter}>
            {col.icon}
            <Text style={styles.cardText}>  {col.title} ({col.count})</Text>
          </View>
        </View>
      ))}
    </View>
  );
}