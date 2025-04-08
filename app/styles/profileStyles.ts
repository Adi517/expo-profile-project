// app/styles/profileStyles.ts

import { StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  profileSection: {
    height: screenHeight * 0.45,
    position: 'relative',
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: '#111',
    overflow: 'hidden',
  },
  backgroundAnimation: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    opacity: 0.4,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profilePicWrapper: {
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#ffb133',
    borderRadius: 10,
    shadowColor: '#ffd533',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 12,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  dot: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: '#FFD700',
    borderRadius: 4,
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  icon: {
    marginLeft: 12,
  },
  infoSection: {
    marginTop: 20,
    gap: 10,
  },
  nameEditRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  editText: {
    fontSize: 14,
    color: '#aaa',
    marginLeft: 4,
  },
  flag: {
    fontSize: 18,
    color: '#fff',
  },
  bio: {
    fontSize: 16,
    color: '#ccc',
  },
  followerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  following: {
    fontSize: 15,
    color: '#888',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
    borderBottomWidth: 1,
    borderColor: '#222',
  },
  tabButton: {
    alignItems: 'center',
    gap: 4,
  },
  tab: {
    fontSize: 16,
    paddingBottom: 8,
    color: '#888',
  },
  activeTab: {
    color: '#00ffff',
    borderBottomWidth: 2,
    borderColor: '#00ffff',
  },
  tabContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  tagIntro: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
  },
  tagButton: {
    backgroundColor: '#1a1a1a',
    padding: 14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  tagTextBlock: {
    flexShrink: 1,
  },
  tagTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  tagDescription: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginBottom: 16,
    padding: 8,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridImage: {
    width: '48%',
    height: 60,
    borderRadius: 6,
    marginBottom: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  cardText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default profileStyles;
